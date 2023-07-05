
# FROM node:16.3.0
FROM node:slim

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

# docker build --platform linux/amd64 -t image-name .

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./  

# Install project dependencies
#RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Run the Puppeteer script when the container starts
CMD ["node", "index.js"]