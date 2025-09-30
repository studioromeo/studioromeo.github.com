# Use a lightweight, stable Node.js image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first to leverage Docker layer caching
# This means npm install only runs if package.json changes
COPY package*.json .

# Install project dependencies
RUN npm install

# Copy the rest of the application files (including /src and eleventy.config.js)
COPY . .

# Eleventy's default development server port
EXPOSE 8080

# Command to start the Eleventy development server.
# The volume setup in docker-compose.yml will ensure that file changes
# on your host machine are immediately visible here, allowing Eleventy's
# built-in file watcher to trigger a reload.
CMD ["npm", "run", "start"]
