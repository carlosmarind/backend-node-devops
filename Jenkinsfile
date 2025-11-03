pipeline {
    agent { 
        docker {
            image "node:22"
        }
    }
    options {
        timeout(time:1 , unit:'MINUTES')
    }
    stages{
        stage('inicio pipeline'){
            steps {
                sh 'echo "saludos desde jenkins en el terminal"'
            }
        }
        stage('mitad pipeline'){
            steps {
                sh 'echo "saludos desde jenkins la mitad del pipeline"'
            }
        }
        stage('dependencias'){
            steps {
                sh 'echo "Instalando dependencias"'
                sh 'npm install'
            }
        }
        stage('fin pipeline'){
            steps {
                echo 'saludos desde jenkins en el pipeline'
            }
        }
    }
}