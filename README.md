#  🚀 Task Management Dashboard (MERN Stack)

A full-stack Task Management Dashboard built using React.js, Node.js, Express, and MongoDB, featuring JWT-based authentication, a modern responsive UI, and complete CRUD functionality.
----

# 📌 Features
## 🔐 Authentication

- User Register & Login

- Password hashing using bcrypt

- Secure JWT authentication

- Protected routes (Dashboard accessible only after login)

- Logged-in user indicator displayed on the dashboard


## 🧠 Task Management

- ➕ Add task

- ✏️ Edit task

- 🗑 Delete task

- 🔍 Search tasks in real time

- Tasks are user-specific

## 🎨 UI / UX

- Modern gradient background

- Clean dashboard layout

- Hover effects on buttons

- Mobile-responsive design using Tailwind CSS

- Smooth transitions and visual feedback

---

# 🛠 Tech Stack
## Frontend

- React.js (Vite)

- Tailwind CSS

- Axios

- React Router DOM

## Backend

- Node.js

- Express.js

- MongoDB (Atlas)

- Mongoose

- JSON Web Token (JWT)

- bcryptjs

- dotenv

- CORS

---

# 🔑 Environment Variables

Create a .env file inside the backend folder:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# ▶️ How to Run the Project
## Backend
```bash
cd backend
npm install
node server.js
```

## Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```bash
👉 http://localhost:5173
```

Backend runs on:
```bash
👉 http://localhost:5000
```

---

## 🔒 Security Practices

- Passwords are hashed using bcrypt

- JWT tokens used for authentication

- Protected routes using middleware

- Authorization headers validated on every request

- User-specific task access
 
---

## 📬 API Endpoints
## Auth

- POST /api/auth/register

- POST /api/auth/login

## Tasks (Protected)

- GET /api/tasks

- POST /api/tasks

- PUT /api/tasks/:id

- DELETE /api/tasks/:id

---

## 📦 Postman Collection

A Postman collection is included in the backend folder:
```bash
backend/postman_collection.json
```
---

## 📈 Scalability & Future Improvements

- Use HttpOnly cookies instead of localStorage

- Implement refresh tokens

- Add role-based access control

- Integrate Redux / React Query

- Pagination & advanced filtering

- Deploy using Docker & CI/CD

---

# 📸 Screenshots

## 📝 Register Page
![Register Page](Screenshots/Register-page.jpeg)

## 🔐 Login Page
![Login Page](Screenshots/Login-page.jpeg)

## 📊 Dashboard Page
![Dashboard Page](Screenshots/Dashboard-page.png)


---

## 👤 Logged-In User Indicator

- Displays “Logged in as: user email” on the dashboard

- Improves clarity and user experience

- Automatically updates after login

- Clears on logout for security

---

## 👨‍💻 Author

Dani Madhavapuri
Frontend / Full-Stack Developer
📍 India
---