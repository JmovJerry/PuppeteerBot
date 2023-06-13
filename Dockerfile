FROM node:16.3.0

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./  

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Run the Puppeteer script when the container starts
CMD ["node", "index.js"]