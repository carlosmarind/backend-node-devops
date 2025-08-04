pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                echo 'Building...'
            }
        }
        stage('Build 2') {
            stages {
                stage('Build') {
                    steps {
                        echo 'Building...'
                        echo 'Building...'
                    }
                }
                stage('Build 2') {
                    steps {
                        echo 'Building... 2'
                        echo 'Building... 4'
                    }
                }
            }
        }
    }
}