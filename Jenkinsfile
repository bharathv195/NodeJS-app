pipeline
{
  agent any
  stages
  {
    stage('Git CheckOut'){
      steps{
        git '
      }
    }
    stage('Build'){
      steps{
        sh 'npm install'
      }
    }
    stage('SonarQubeReport'){
      steps{
        sh 'npm run sonar'
      }
    }
  }
}
