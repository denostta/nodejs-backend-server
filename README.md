git clone git@github.com:denostta/nodejs-backend-server.git         - clone project in github
cd nodejs-backend-server            - go to project bane as working directory
npm install                         - install all the dependencies
touch .env                          - creating .env file and create variables required for configuration
npx prisma migrate deploy           - deploy migrations
npx prisma generate                 - run after:
                                        - changing the shema.prisma
                                        - running migrations
                                        - cloning project
                                        - npm install
npm run dev                         - run the server
create users using postman
changed the userID in seed.js
npm run seed:movies                 - seed movies in a specific user usig userID




