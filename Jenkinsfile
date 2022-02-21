node {
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      bat "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=Project -Dsonar.login=c53222b5ba390cb3a86247ab84c773a2b75420b3"
    }
  }
}
