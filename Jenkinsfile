pipeline {
    agent any
    stages {
        stage("Git Checkout"){
            steps{
                bat "git checkout $params.TAG"
            }
        }
        stage('Build Project') {
            bat 'docker build -t ProjetoTeste .'
        }

        stage('Deploy to ECR') {
            bat 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/p7n3n7f0'
            bat 'docker build -t testando .'
            bat 'docker tag testando:latest public.ecr.aws/p7n3n7f0/testando:latest'
            bat 'docker push public.ecr.aws/p7n3n7f0/testando:latest'
        }
    }
}
