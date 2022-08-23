# Note: only works with node 14 since its the minimun version for postcss and the max version supported in yarn.
FROM node:14.5.0-alpine

# If we want to serve our app in a production like environment, the first thing we need to do
# is install a static file server in our container to serve vue generated static files.
RUN npm install -g http-server

# Create workdir
RUN mkdir -p /frontend
# Set out workdir to frontend.
WORKDIR /frontend

# Copy the package info file into the root directory.
COPY package.json ./
# Copy the yarn.lock file (or package-lock.json if using npm), this helps to make repeatable envs.
# i prefer using yarn as its way faster than npm.
COPY yarn.lock ./
# Install dependencies
RUN yarn install
# Copy project files into the working directory.
COPY . .
# Build the app with provided vue script.
RUN yarn build
# Expose the port we will be using to serve our app on.
EXPOSE 8080
# Serve the app dist file with pm2, --spa argument is necessary so every route hit the vue entry point.
CMD [ "http-server", "dist" ]