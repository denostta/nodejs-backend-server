## SETUP SERVER
    - npm init -y
    - npm i express
    - nodemon for development
    - edit package.json:
        - replace "main" to "src/server.js"
        - replace "type" from "commonjs" to "module"
        - add npm run command for development:
            - "dev": "nodemon /src/server.js"
    - run the server:
        npm run dev
    - create test endpoint /
        - test the endpoint:
            - http://localhost:5001/
## CREATE ROUTES
    - in src folder create routes folder and then create movieRoutes.js file
    - create movie router from express.Router()
    - export the movie router
    - in server.js import the exported movie route
    - create movies route
    - test endpoints
## OPEN ACCT IN neon.tech NAND CREATE NEW PROJECT
    - create a new acct
    - create new project
    - storage for free acct 0.5GB
## USING PRISMA ORM
    - npx prisma init
    - npm install prisma --save-dev
    - npm install @prisma/client
    - go to prisma.config.ts and connect to database using url: process.env["DATABASE_URL"]:
        - go to neon then dashboard and click "Connect" and get the url string
        - create .env file and replace the default DATABASE_URL created from prisma setup with the actual neon postgres database url
## SETUP ENVIRONMENTAL VARIABLES
    - npm install dotenv
    - in server.js
        - import {config} from "dotenv"
        - call config()

## CONFIGURE THE CONNECTTON OF THE APP TO DATABASE
    - create "config" folder in "src" folder and create "db.js" file
        -import PrismaClient
        - create instance of prisma client
        - in log create e-variable of NODE_ENV
        - create connectDB and disconnectDB functions
        - export prisma, connectDB, disconnectDB
    - create model in schema.prisma
    - npx prisma migrate dev --name add_users_table
    - delete  output   = "../src/generated/prisma" in schema.prisma