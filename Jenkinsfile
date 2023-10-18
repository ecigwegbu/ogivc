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
        sh '''pwd && ls && npm --version && node --version && pwd && npm install && pkill -9 npm && npm run build  && nohup npm run start &
'''
      }
    }

  }
  environment {
    GOOGLE_ID = '"4282161966-1gdn514enn0to3pohh18msq7o58ls3cn.apps.googleusercontent.com"'
    GOOGLE_CLIENT_SECRET = '"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"'
    MONGODB_URI = '"mongodb+srv://igwegbu:1eDSUira2g9p1ahc@cluster0.vemkc9h.mongodb.net/?retryWrites=true&w=majority"'
    NEXTAUTH_URL = '"http://localhost:3300"'
    NEXTAUTH_SECRET = '"h2jFn2bfiY8fDSzRbGxgOprBjAeohSLQRlL6HKqHYlE="'
  }
}