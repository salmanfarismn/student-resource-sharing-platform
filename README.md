# Study Resource Sharing System (MERN)

A minimal **Study Resource Sharing System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
The application allows students to create and manage study resources while admins can moderate resources using role-based access control.

---

## Features

### Authentication

* Student Registration
* Student Login
* Admin Login (predefined credentials)
* JWT-based authentication
* Secure password hashing using bcrypt
* Logout functionality

### Role-Based Access Control

#### Guest

* View all study resources

#### Student

* Create study resources
* View all resources
* Update their own resources
* Delete their own resources

#### Admin

* View all resources
* Delete any resource in the system

---

## Resource Structure

Each study resource contains:

* **Title**
* **Description**
* **Subject**
* **Created By (User reference)**
* **Created Date**

---

## Security Features

* JWT authentication middleware
* Role-based authorization
* Ownership validation for resource updates and deletion
* Password hashing using bcrypt
* Input validation
* Proper API error handling

---

## Tech Stack

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication & Security

* JSON Web Tokens (JWT)
* bcrypt

---

## API Endpoints

### Authentication

```bash
POST /api/auth/signup
POST /api/auth/login
```

### Resources

```bash
GET    /api/resources
POST   /api/resources
PUT    /api/resources/:id
DELETE /api/resources/:id
```

---

## Project Structure

```
study-resource-sharing-system
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
└── client
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── services
    │   └── App.js
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/salmanfarismn/student-resource-sharing-platform.git
```

---

### 2. Install backend dependencies

```bash
cd backend
npm install
```

---

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the **server** folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 5. Run the Project

Start backend:

```bash
nodemon app.js
```

Start frontend:

```bash
npm run dev
```

---

## Future Improvements

* Resource search and filtering
* Pagination for resource lists
* File uploads for study materials
* Bookmark or favorite resources
* Admin analytics dashboard

---

## License

This project is built for **educational purposes**.
