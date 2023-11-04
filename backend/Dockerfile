# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the TypeScript code (if applicable)
RUN npm run build

# Expose the port your application is running on (e.g., 3000)
EXPOSE 5000

# Start your application
CMD ["npm", "start"]
