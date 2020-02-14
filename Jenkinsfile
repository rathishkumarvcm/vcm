pipeline {
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    environment {
        PATH = "/usr/local/bin:$PATH"
    }
    tools {nodejs "node"}
    stages {
        stage('Checkout Shared Repo') {
            steps {
                dir('App')
                {
                    dir('Shared')
                    {
                        deleteDir()
                    }
                    sh 'mkdir Shared'
                }
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], 
                            userRemoteConfigs: [[url: 'https://github.com/victorycapital/vcm-ms-shared.git']],
                            extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'App/Shared']] 
                        ])
            }
        }
        // stage('IOSBuild') { 
        //     steps {
        //         sh 'npm install'
        //         //sh 'cd ios'
        //         dir('ios')
        //         {
        //             sh 'LANG=en_US.UTF-8 /usr/local/bin/pod install'
        //             sh '/usr/bin/xcodebuild -scheme MemberServices -workspace MemberServices.xcworkspace -configuration Release build DEVELOPMENT_TEAM=ADDJLMH3Z7 -allowProvisioningUpdates -destination "platform=iOS Simulator,name=iPhone 11,OS=13.1" -derivedDataPath build/MemberServices'
        //         }
        //     }
        // }
        //stage('AndroidBuild') { 
        //    steps {
                //sh 'npm install'
                //dir('android')
                //{
                //    sh './gradlew app:assembleDebug'
                //}
        //    }
        //}
        stage('Test') { 
            steps {
                sh 'echo Testing'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'echo Deploying'
                sh 'npm install'
                dir('ios')
                {
                    sh 'echo iOSBuild'
                    sh 'pod install'
                    sh 'bundle install'
                    sh 'bundle update fastlane'
                    // sh 'gem install json -v "2.3.0"'
                    sh 'bundle exec fastlane beta'
                }
                dir('android')
                {
                    sh 'echo AndroidBuild'
                    sh 'bundle install'
                    sh 'bundle update fastlane'
                    sh 'bundle exec fastlane beta'
                }
            }
        }

        // stage('Deploy') { 
        //     steps {
        //         sh 'echo Deploying'
        //         sh 'npm install'
        //         dir('ios')
        //         {
        //             sh 'echo iOSBuild'
        //             sh '/usr/local/bin/pod install'
        //             sh '/usr/local/opt/ruby/bin/bundle install'
        //             sh '/usr/local/opt/ruby/bin/bundle update fastlane'
        //             // sh 'gem install json -v "2.3.0"'
        //             sh '/usr/local/opt/ruby/bin/bundle exec /usr/local/bin/fastlane beta'
        //         }
        //         dir('android')
        //         {
        //             sh 'echo AndroidBuild'
        //             sh '/usr/local/opt/ruby/bin/bundle install'
        //             sh '/usr/local/opt/ruby/bin/bundle update fastlane'
        //             sh '/usr/local/opt/ruby/bin/bundle exec /usr/local/bin/fastlane beta'
        //         }
        //     }
        // }
    }
}