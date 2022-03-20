pipeline {
    agent any

    stages {
        stage('CLONE') {
            steps {
                git 'https://github.com/wolff453/teste-jenkins.git'
            }
        }
        
        stage("INSTALL"){
            bat 'npm install'
        }
    }
}
