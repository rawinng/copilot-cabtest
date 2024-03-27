# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

LABEL org.opencontainers.image.source https://github.com/innovestx/test-github

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the code into the container
COPY . .

# Compile the TypeScript code
RUN npm run build

# Make port 3000 available outside the container
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]