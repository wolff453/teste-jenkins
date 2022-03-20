pipeline {
    agent any
    stages {
        stage("INSTALL"){
            steps{
                bat 'git checkout' + params.Tag
            }
        }
    }
}
