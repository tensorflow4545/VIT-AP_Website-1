FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN ls -la /app
RUN npm install

# Copy the rest of the Next.js project
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Run the built code
FROM node:18-alpine

WORKDIR /app

# Copy the necessary files and directories from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
