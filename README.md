# E-Commerce Website

## Overview

This project is a web application designed to manage users, products, categories, shopping carts, and orders. The application uses MongoDB for database management and includes RESTful API endpoints to interact with the database.

## Features

- User Registration
- User Login
- Product Management
- Category Management
- Product Categorization
- Shopping Cart Management
- Order Management

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web framework for building RESTful APIs.
- **Mongoose**: ODM library for MongoDB.
- **MongoDB**: NoSQL database for storing user and product data.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for handling JSON Web Tokens (JWT).
- **TypeScript**: Superset of JavaScript for type safety.

## Getting Started

### Prerequisites

- Node.js and npm installed. (Download from [Node.js](https://nodejs.org/))
- MongoDB installed and running locally, or a remote MongoDB instance.

### Installation

1. **Clone the repository**

2. **Install dependencies**
     ```bash
     npm install
3. **Set up environment variables**
  ``` 
      MONGO_URI=mongodb://localhost:27017/your-database-name
      JWT_SECRET=your-jwt-secret-key

