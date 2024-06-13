# Define the Node.js version to use
ARG NODE_VERSION=20-alpine

# Stage 1: Build the Node.js TypeScript application
FROM node:${NODE_VERSION} as build
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run pug
RUN npm run sass

FROM nginx:latest

COPY --from=build /app/output /usr/share/nginx/html

EXPOSE 80
