pipeline {
    agent any 
    options {
        skipStagesAfterUnstable()
    }
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
                // 
            }
        }
        stage('Deploy') { 
            steps {
                // 
            }
        }
    }
}