pipeline {
    agent any

    environment {
        IMAGE_NAME = 'portfolio_site' // Docker imaj adı
        CONTAINER_NAME = 'portfolio_container' // Docker konteyner adı
        PORT = '80' // Web sitesi portu
    }

    stages {
        stage('Clone Repository') {
            steps {
                // GitHub reposunu klonlar
                git branch: 'main', url: 'https://github.com/ersensari/portfolio.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Docker imajı oluşturur
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Mevcut konteyneri durdurup siler
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    
                    // Yeni konteyneri başlatır
                    sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:8089 ${IMAGE_NAME}"
                }
            }
        }
    }
}
