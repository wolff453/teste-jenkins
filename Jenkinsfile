pipeline {
    agent any
    stages {
        stage("Git Checkout"){
            steps{
                bat "git checkout $params.TAG"
            }
        }
        stage('Build Project') {
            steps {
            bat 'docker build -t ProjetoTeste .'

            }
        }

        stage('Deploy to ECR') {
             steps {
                  withCredentials([aws(accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'e109d76d-f018-428a-b960-e9b54309fa90', secretKeyVariable:'AWS_SECRET_ACCESS_KEY')]){
             bat 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/p7n3n7f0'
            bat 'docker build -t testando .'
            bat 'docker tag testando:latest public.ecr.aws/p7n3n7f0/testando:latest'
            bat 'docker push public.ecr.aws/p7n3n7f0/testando:latest'
            }
       
            }
           
   
        }
    }
}
