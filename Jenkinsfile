pipeline {
    agent any
    stages {
        stage('Etapa de construccion / build de aplicacion') {
            agent {
                docker {
                    image 'node:22'
                    reuseNode true
                }
            }
            stages{
                stage('Instalacion de dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('Ejecucion de pruebas automatizadas') {
                    steps {
                        sh 'npm run test:cov'
                    }
                }
                stage('Construccion de aplicacion') {
                    steps {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Etapa de empaquetado y delivery') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        sh 'docker build -t backend-node-devops:cmd .'
                        sh 'docker tag backend-node-devops:cmd carlosmarind/backend-node-devops:cmd'
                        sh 'docker push carlosmarind/backend-node-devops:cmd'
                    }
                    docker.withRegistry('http://localhost:8082', 'nexus-credentials') {
                        sh 'docker tag backend-node-devops:cmd localhost:8082/backend-node-devops:cmd'
                        sh 'docker push localhost:8082/backend-node-devops:cmd'
                    }
                }
            }
        }
    }
}