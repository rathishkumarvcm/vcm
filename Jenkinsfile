pipeline {
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'cd ios'
                sh '/usr/local/bin/pod install'
                sh '/usr/bin/xcodebuild -scheme MemberServices -workspace MemberServices.xcworkspace -configuration Release build DEVELOPMENT_TEAM=ADDJLMH3Z7 -allowProvisioningUpdates'
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