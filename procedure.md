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
    - in schema.prisma
        - change provider = "prisma-client" to provider = "prisma-client-js"
        - delete  output   = "../src/generated/prisma" in schema.prisma
        - create model in schema.prisma
    - npx prisma migrate dev --name add_users_table
    - will auto create a migration folder in prisma folder
    - check the new table created in neon
    - npx prisma generate (run this every migration)
    - npx prisma migrate dev --name added_other_tables
    - npx prisma generate (run this every migration)
    - i have prisma engine error:
        used github copilot:
            - npm i @prisma/adapter-pg
            - npm i pg
            - changed the db.js
            - Updated db.js:

                Imported the PrismaPg adapter and Pool from pg
                Created a connection pool using your DATABASE_URL
                Passed the adapter to the PrismaClient constructor

## AUTHENTICATION ROUTE
    - create authRoutes.js file in routes folder
    - create controllers folder in src folder
    - create authController.js file
    - create body parser middleware in server.js 
    - test post request in postman
    - register controller logic:
        - check if the user already exist in database
        - reponse if the new user email already exist
        - hash password
            - npm i bcryptjs
            - salt
            - hashpassword
            - create new user
            - response for successful creation of new user
            - test in postman
    - login controller logic:
            - check if the user exist in database using email
            - response if invalid email
            - verify the password
            - response if invalid password
            - generate JWT token
                - npm i jsonwebtoken
                - create utils folder in src folder
                - create generateToken.js file in utils folder
                    - import jwt from jsonwebtoken
                    - create generateToken() helper function
                        - use userId as payload
                        - create JWT_SECRET in .env as secret key for creating token
                            - create base64 key uisng terminal command:
                                - openssl rand -base64 32
                        - create JWT_EXPIRES_IN in .env
                        - save the response token to cookie using httpOnly
                        - create token using paylod, JWT_SECRET and JWT_EXPIRES_IN
                        - import dotenv/config
                    
            - create token using generateToken(user.id, res) function
            - response if successful login with token and cookie
            - update response in register controller with token
            - test in postman
    - logout controller logic
            - remove the cookie
                - set token to empty string ""
                - set expire at the current date(0)
            - create a response


## SEED DATA TO MOVIE TABLE
    - create seed.js file in prisma folder
    - create a seed script in package.json
    - run seed
        - npm run seed:movies

