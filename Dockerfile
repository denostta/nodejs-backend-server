# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifests first to leverage Docker layer caching
COPY package.json package-lock.json* ./

# Install all dependencies so Prisma can generate its client
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copy application source so Prisma schema is available
COPY . .

# Generate Prisma client and then remove dev-only packages
RUN npx prisma generate && npm prune --production

# Expose the port your app listens on
EXPOSE 5001

# Use the Node.js entrypoint defined in your package
CMD ["node", "src/server.js"]
