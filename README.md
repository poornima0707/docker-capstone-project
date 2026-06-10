# Docker Capstone Project – Maison Doree Website

## Project Overview

This project demonstrates containerization and deployment of a static luxury jewelry website using Docker and Docker Compose.

The application consists of HTML, CSS, JavaScript, and image assets served through an Nginx container.

## Objectives

* Containerize a web application using Docker
* Create a Dockerfile for application deployment
* Use Docker Compose for service orchestration
* Deploy the application on a Linux VM
* Implement container health checks
* Manage source code using Git and GitHub

## Technology Stack

* Docker
* Docker Compose
* Nginx
* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Ubuntu Linux VM

## Project Structure

```text
docker-capstone-project/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── maison-templatemo.html
│   ├── timer.html
│   ├── templatemo-maison-style.css
│   ├── templatemo-maison-doree.js
│   └── images/
├── docker-compose.yml
├── README.md
└── screenshots/
```

## Dockerfile

The application uses an Nginx container to serve static website files.

```dockerfile
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY . .

EXPOSE 80
```

## Docker Compose Configuration

```yaml
version: "3.8"

services:
  frontend:
    build: ./frontend
    ports:
      - "9090:80"
```

## Deployment Steps

1. Clone the repository
2. Navigate to project directory
3. Build and start containers

```bash
docker compose up -d --build
```

4. Verify running containers

```bash
docker ps
```

5. Access the application

```text
http://localhost:9090
```

## Verification

* Verified container deployment using Docker Compose
* Checked application logs
* Tested container restart functionality
* Confirmed website accessibility through browser

## Learning Outcomes

* Docker containerization
* Docker Compose orchestration
* Static website deployment using Nginx
* Linux command-line operations
* Git and GitHub version control
* DevOps deployment workflow

## Author

Poornima
Docker Capstone Project

