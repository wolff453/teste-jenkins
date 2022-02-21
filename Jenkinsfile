node {
  stage('GIT CLONE'){
       bat 'git clone https://github.com/wolff453/teste-jenkins.git'
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarScanner';
    withSonarQubeEnv() {
      bat "${scannerHome}/bin/sonar-scanner"
    }
  }
}
