pipeline {
    agent any
    stages {
        stage("Git Checkout"){
            steps{
                bat "git checkout $params.TAG"
            }
        }

     }
}
