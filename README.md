MERN Blog Backend

This is the backend for the MERN Blog application. It is built using Node.js, Express.js, and MongoDB with Mongoose for database modeling. The backend provides a RESTful API for managing blog posts, categories, user authentication, and comments.

📂 Project Structure
server/
├── config/           # Configuration files (DB connection, environment variables)
├── controllers/      # Route controllers for posts, categories, auth
├── models/           # Mongoose models (Post, Category, User, Comment)
├── routes/           # Express API routes
├── middleware/       # Custom middleware (auth, error handling)
├── utils/            # Utility functions
├── server.js         # Main server entry point
├── package.json      # Server dependencies
└── .env.example      # Example environment variables

⚙️ Features

RESTful API endpoints:

Posts: CRUD operations

GET /api/posts – Get all posts

GET /api/posts/:id – Get a single post

POST /api/posts – Create a new post

PUT /api/posts/:id – Update a post

DELETE /api/posts/:id – Delete a post

Categories: CRUD operations

GET /api/categories – Get all categories

POST /api/categories – Create a new category

Auth: User registration and login

POST /api/auth/register – Register a new user

POST /api/auth/login – Login user

MongoDB integration with Mongoose

Input validation using express-validator or similar

Error handling middleware

File uploads support (/uploads)

Environment variable management

🛠️ Prerequisites

Node.js v18+

MongoDB (Atlas or local)

npm or yarn