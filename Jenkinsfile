pipeline {
    agent { 
        docker {
            image "node:22"
        }
    }
    stages{
        stage('inicio pipeline'){
            steps {
                sh 'echo "iniciando pipeline"'
            }
        }
        stage('dependencias'){
            steps {
                sh 'echo "Instalando dependencias"'
                sh 'npm install'
            }
        }
        stage('Lint de codigo'){
            steps {
                sh 'echo "Haciendo linter al codigo"'
                sh 'npm run lint'
            }
        }
        stage('Ejecutando test y coverage'){
            steps {
                sh 'echo "Haciendo testing al codigo"'
                sh 'npm run test:cov'
            }
        }
        stage('Ejecutando build'){
            steps {
                sh 'echo "Haciendo build del codigo"'
                sh 'npm run build'
            }
        }
        stage('Build docker image'){
            steps {
               sh 'docker build -t backend-node .'
            }
        }
        stage('fin pipeline'){
            steps {
                echo 'finalizando pipeline'
            }
        }
    }
}