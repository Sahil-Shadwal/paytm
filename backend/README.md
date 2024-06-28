## Steps to start backend

# Make sure docker in installed

# For building docker file run

`sudo docker build ./ -t mongodb:4.7-replset `

# for starting the instance

`sudo docker run --name mongodb-replset22 -p 27017:27017 -d mongodb:4.7-replset`

# To check if the docker is running or not

`docker ps `

# Now to start the backend you would need to hit

`node index.js`

- postman post: http://localhost:3000/api/v1/user/signup

{
"username": "Sahil",
"firstName": "Sahil",
"lastName": "Shadwal",
"password": "123456"
}
