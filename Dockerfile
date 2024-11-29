# Step 1: Build React app
FROM node:18 AS react-builder
WORKDIR /app/client
COPY ./client/package*.json ./
RUN npm install
COPY ./client ./
RUN npm run build

# Step 2: Build Go app
FROM golang:1.23 AS go-builder
WORKDIR /app
COPY . ./
# Copy React build to Go project directory
COPY --from=react-builder /app/client/build ./client/build
# Build the Go binary
RUN go build -o main .

# Step 3: Run the application
FROM golang:1.20 AS runner
WORKDIR /app
COPY --from=go-builder /app .
EXPOSE 8080
CMD ["./main"]
