docker build -t nodejs-backend-server .

docker run -p 5001:5001 --env-file .env nodejs-backend-server