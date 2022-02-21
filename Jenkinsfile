node {
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      bat "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=Project -Dsonar.login=admin -Dsonar.password=07142155"
    }
  }
}
