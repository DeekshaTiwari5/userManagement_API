# UserManagement_API
A simple RESTful API for managing users using Node.js, Express.js, PostgreSQL, and Sequelize.

Features
CRUD operations for users (Create, Read, Update, Delete)
PostgreSQL database integration using Sequelize ORM
Input validation with middleware
Error handling
API documentation with Swagger
Unit tests using Jest and Supertest

--Installation & Setup

1. Clone the Repository
```sh git clone https://github.com/your-username/user-api.git cd user-api ```

2. Install Dependencies
```sh npm install ```

3. Configure Environment Variables
Create a .env file in the root directory and add the following: ```env DB_NAME=userdb DB_USER=postgres DB_PASSWORD=yourpassword DB_HOST=127.0.0.1 DB_DIALECT=postgres PORT=5000 ```

4. Setup Database
Ensure PostgreSQL is running, then execute: ```sh npx sequelize-cli db:create npx sequelize-cli db:migrate ```

5. Start the Server
For production: ```sh npm start ``` For development with hot reload: ```sh npm run dev ```

6. Run Tests
```sh npm test ```

Usage
1. Running the API
Start the server using: ```sh npm run dev ``` The API will be available at http://localhost:5000.

2. Making API Requests
Use a tool like Postman, cURL, or a browser to interact with the API.

Get all users
```sh GET http://localhost:5000/users ```

Get a user by ID
```sh GET http://localhost:5000/users/:id ```

Create a new user
```sh POST http://localhost:5000/users ``` Body: ```json { "name": "John Doe", "email": "john@example.com" } ```

Update a user by ID
```sh PUT http://localhost:5000/users/:id ``` Body: ```json { "name": "Jane Doe", "email": "jane@example.com" } ```

Delete a user by ID
```sh DELETE http://localhost:5000/users/:id ```

API Documentation
Swagger documentation is available at: ``` http://localhost:5000/api-docs ```

Project Structure
``` user-api/ 
│── config/ # Database configuration
│── controllers/ # Request handlers
│── middlewares/ # Middleware functions
│── models/ # Sequelize models
│── routes/ # API route definitions
│── tests/ # Unit tests
│── .env # Environment variables
│── server.js # Main entry point
│── swagger.js # Swagger documentation setup
│── README.md # Documentation ```

License
This project is licensed under the MIT License. ```

This preserves the Markdown formatting while displaying it inside a code block. Let me know if you need further refinements! 🚀







