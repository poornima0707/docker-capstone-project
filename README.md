# Docker Capstone Project – Full Stack Application Deployment on AWS EC2

## Project Overview

This project demonstrates a complete DevOps workflow by containerizing a multi-service application using Docker and deploying it on AWS EC2.

The application consists of:

* Frontend: Static website served using Nginx
* Backend: Node.js Express API
* Database: Redis
* Container Orchestration: Docker Compose
* Cloud Platform: AWS EC2

The objective of this project is to simulate a real-world DevOps deployment scenario involving containerization, service orchestration, cloud deployment, health monitoring, and logging.

---

## Project Architecture

Frontend (Nginx)
↓
Backend (Node.js Express)
↓
Redis Database

All services are managed using Docker Compose and communicate through a Docker network.

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Nginx

### Backend

* Node.js
* Express.js

### Database

* Redis

### DevOps Tools

* Docker
* Docker Compose
* Git
* GitHub

### Cloud Platform

* AWS EC2 (Amazon Linux 2023)

---

## Project Structure

docker-capstone-project/

├── frontend/

│ ├── index.html

│ ├── css/

│ ├── js/

│ ├── images/

│ └── Dockerfile

│

├── backend/

│ ├── server.js

│ ├── package.json

│ └── Dockerfile

│

├── docker-compose.yaml

│

└── README.md

---

## Docker Containers

### Frontend Container

* Built using Nginx Alpine image
* Serves static website files
* Exposed on Port 9090

### Backend Container

* Built using Node.js Alpine image
* Runs Express API server
* Exposed on Port 5000

### Redis Container

* Uses official Redis Alpine image
* Exposed on Port 6379

---

## Docker Compose Services

### Frontend

* Build Context: ./frontend
* Port Mapping: 9090:80

### Backend

* Build Context: ./backend
* Port Mapping: 5000:5000

### Redis

* Image: redis:7-alpine
* Port Mapping: 6379:6379

---

## Local Deployment

### Clone Repository

git clone https://github.com/poornima0707/docker-capstone-project.git

cd docker-capstone-project

### Build and Run

docker compose up -d --build

### Verify Containers

docker ps

### Test Backend

curl http://localhost:5000

Expected Output:

Backend running successfully

---

## AWS EC2 Deployment

### EC2 Configuration

* AMI: Amazon Linux 2023
* Instance Type: t2.medium
* Storage: 20 GB

### Security Group Rules

| Type       | Port |
| ---------- | ---- |
| SSH        | 22   |
| Custom TCP | 9090 |
| Custom TCP | 5000 |

### Install Docker

sudo dnf update -y

sudo dnf install docker -y

sudo systemctl start docker

sudo systemctl enable docker

### Install Docker Compose

sudo mkdir -p /usr/local/lib/docker/cli-plugins

sudo curl -SL https://github.com/docker/compose/releases/download/v2.39.1/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose

sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

### Clone Repository

git clone https://github.com/poornima0707/docker-capstone-project.git

cd docker-capstone-project

### Deploy Application

docker compose up -d --build

---

## Validation

### Verify Running Containers

docker ps

### Verify Backend

curl http://localhost:5000

### Verify Frontend

http://EC2-PUBLIC-IP:9090

---

## Logging

View all logs:

docker compose logs

View backend logs:

docker compose logs backend

View frontend logs:

docker compose logs frontend

View redis logs:

docker compose logs redis

---

## Health Monitoring

Container health and status can be checked using:

docker ps

docker inspect <container_id>

---

## Screenshots Included

* EC2 Instance Running
* Security Group Configuration
* Docker Containers Running
* Frontend Application
* Backend API Response
* Docker Logs
* GitHub Repository

---

## Key DevOps Concepts Demonstrated

* Containerization using Docker
* Multi-container architecture
* Docker Compose orchestration
* Cloud deployment on AWS EC2
* Service networking
* Logging and monitoring
* Version control using Git and GitHub
* Infrastructure deployment and validation

---

## Author

Poornima

GitHub:
https://github.com/poornima0707

---

## Conclusion

This project demonstrates how a full-stack application can be containerized, orchestrated using Docker Compose, and deployed on AWS EC2 following DevOps best practices. The deployment includes frontend, backend, and database services running independently in containers while communicating through Docker networking.

