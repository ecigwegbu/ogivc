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

    stage('Build') {
      steps {
        sh 'nvm use 18 && node --version && /home/jenkins/.nvm/versions/node/v18.18.2/bin/npm run build'
      }
    }

  }
  environment {
    GOOGLE_ID = '"175623644121-4644b1b0pa54kbi08ak4ajm1lu887ost.apps.googleusercontent.com"'
    GOOGLE_CLIENT_SECRET = '"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"'
    MONGODB_URI = '"mongodb+srv://igwegbu:1eDSUira2g9p1ahc@cluster0.vemkc9h.mongodb.net/?retryWrites=true&w=majority"'
    NEXTAUTH_URL = '"http://localhost:3300"'
    NEXTAUTH_SECRET = '"h2jFn2bfiY8fDSzRbGxgOprBjAeohSLQRlL6HKqHYlE="'
  }
}