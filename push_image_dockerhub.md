login to hub.docker.com
create private repository
    - Fill in the details:

        - Namespace → your username
        - Repository name → e.g. nodejs-backend-server
        - Visibility → select 🔒 Private
        - Click "Create"
login docker hub in terminal
    - docker login
tag locall image:
    - docker tag nodejs-backend-server:latest yourusername/nodejs-backend-server:latest
push to private repository
    - docker push yourusername/nodejs-backend-server:latest
pull image anywhere:
    - docker login
    - docker pull yourusername/nodejs-backend-server:latest



## BEST WORKFLOW PRACTICE IN UPDATINF TAGS OF DOCKER IMAGES IN DOCKERHUB
first time:
    - docker build -t nodejs-backend-server:latest .
    - docker tag nodejs-backend-server:latest yourusername/nodejs-backend-server:latest
    - docker push yourusername/nodejs-backend-server:latest
    result: 
        - nodejs-backend-server:latest → first image (abc123)
second time:
    - docker pull yourusername/nodejs-backend-server:latest
    - docker tag yourusername/nodejs-backend-server:latest yourusername/nodejs-backend-server:v1.0
    - docker push yourusername/nodejs-backend-server:v1.0
    - docker build -t nodejs-backend-server:latest .
    - docker tag nodejs-backend-server:latest yourusername/nodejs-backend-server:latest
    - docker push yourusername/nodejs-backend-server:latest
    result: 
        - nodejs-backend-server:latest → new image (xyz789) 
        - nodejs-backend-server:v1.0   → old image safely saved (abc123) 
third time:
    - docker pull yourusername/nodejs-backend-server:latest
    - docker tag yourusername/nodejs-backend-server:latest yourusername/nodejs-backend-server:v2.0
    - docker push yourusername/nodejs-backend-server:v2.0
    - docker build -t nodejs-backend-server:latest .
    - docker tag nodejs-backend-server:latest yourusername/nodejs-backend-server:latest
    - docker push yourusername/nodejs-backend-server:latest
    result:
        - nodejs-backend-server:latest → newest image 
        - nodejs-backend-server:v2.0   → second image safely saved 
        - nodejs-backend-server:v1.0   → first image safely saved 