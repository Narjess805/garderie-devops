pipeline {
  agent any
  environment {
    DOCKERHUB_CRED = 'dockerhub-credentials'
    DOCKERHUB_USER = 'monuser'
    FE_IMAGE = "${DOCKERHUB_USER}/garderie-frontend"
    BE_IMAGE = "${DOCKERHUB_USER}/garderie-backend"
    TAG = "${env.BUILD_NUMBER}"
  }
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install') {
      steps {
        dir('backend')  { sh 'npm ci' }
        dir('frontend') { sh 'npm ci' }
      }
    }
    stage('Test') {
      steps { dir('frontend') { sh 'npm test -- --ci --watchAll=false' } }
    }
    stage('Build Frontend') {
      steps { sh "docker build --build-arg NEXT_PUBLIC_API_URL=http://backend:5000 -t ${FE_IMAGE}:${TAG} -t ${FE_IMAGE}:latest ./frontend" }
    }
    stage('Build Backend') {
      steps { sh "docker build -t ${BE_IMAGE}:${TAG} -t ${BE_IMAGE}:latest ./backend" }
    }
    stage('Push Frontend') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CRED, usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh "docker push ${FE_IMAGE}:${TAG} && docker push ${FE_IMAGE}:latest"
        }
      }
    }
    stage('Push Backend') {
      steps {
        withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CRED, usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
          sh 'echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin'
          sh "docker push ${BE_IMAGE}:${TAG} && docker push ${BE_IMAGE}:latest"
        }
      }
    }
  }
  post { always { sh 'docker logout || true' } }
}
