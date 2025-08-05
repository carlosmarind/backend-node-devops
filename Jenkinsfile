pipeline {
    agent any
    stages {
        stage('Etapa de construccion') {
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
                sh 'docker build -t backend-node-devops:cmd .'
            }
        }
    }
}