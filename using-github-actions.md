# OVERVIEW OF FLOW:
    Code push -> Github actions -> Build Docker Image -> Push to DockerHub -> Trigger Render Deploy

# PREREQUISITES:
    - github repo with Dockerfile
    - DockerHub acct with private repo alaready created
    - Render.com service already running (using docker hub image)

# CREATING SECRETS IN GITHUB ACTIONS
    - IN GITUB REPO(available for all workflows):
        Settings -> Secrets and Variables -> Actions -> Repository secrets
         - DOCKER_USERNAME
         - DOCKER_PASSWORD (your Docker Hub access token)
         - RENDER_DEPLOY_HOOK_URL
    - to get dockehub access token
        DockerHub -> Account Settings -> Security -> New Access token
    - get render deploy hook
        - go to Render.com -> Your Service -> Settings
        - scroll to Deploy Hook
        - copy the url
        - save as RENDER_DEPLOY_HOOK_URL 

# CREATING THE GITHUB ACTIONS WORKFLOW FILE
    - in project folder create this file exactly:
        .github/workflows/docker-deploy.yml