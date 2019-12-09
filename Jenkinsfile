pipeline {
    agent any 
    options {
        skipStagesAfterUnstable()
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
        stage('Build') { 
            steps {
                sh 'npm install'
                //sh 'cd ios'
                dir('ios')
                {
                    sh 'LANG=en_US.UTF-8 /usr/local/bin/pod install'
                    sh '/usr/bin/xcodebuild -scheme MemberServices -workspace MemberServices.xcworkspace -configuration Release build DEVELOPMENT_TEAM=ADDJLMH3Z7 -allowProvisioningUpdates'
                }
            }
        }
        stage('Test') { 
            steps {
                sh 'echo Testing'
            }
        }
        stage('Deploy') { 
            steps {
                sh 'echo Deploying'
            }
        }
    }
}