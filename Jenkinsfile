pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/ecigwegbu/ogivc', branch: 'main')
      }
    }

    stage('Add Log') {
      steps {
        sh 'ls -la'
      }
    }

  }
}