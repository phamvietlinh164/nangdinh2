pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Start build'
                sh '''
                    ls -la
                '''
            }
        }
        stage('Build') {
            steps {
                sshagent(['ssh-remote']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no -l ec2-user ec2-user@ec2-54-211-252-41.compute-1.amazonaws.com "
                            cd nangdinh2 && git pull && sudo systemctl restart nangdinh.service
                            "
                    '''
                }
            }
        }
    }
}
