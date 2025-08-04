pipeline {
    agent any
    stages {
        stage('Instalacion de dependencias') {
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
            }
        }

        //stage('En construccion') {
        //    stages {
        //        stage('Build') {
        //            steps {
        //                echo 'Building...'
        //                echo 'Building...'
        //            }
        //        }
        //        stage('Build 2') {
        //            steps {
        //                echo 'Building... 2'
        //                echo 'Building... 4'
        //            }
        //        }
        //    }
        //}
    }
}