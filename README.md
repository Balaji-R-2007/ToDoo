# 📌 MERN To-Do App with Profile Feature

## 🚀 Overview
This is a **MERN (MongoDB, Express, React, Node.js)** stack To-Do application with a user profile feature. Users can create an account, manage their tasks, and update their profiles.

## ✨ Features
- ✅ **User Authentication** (JWT-based login/register)
- 📝 **Create, Read, Update, Delete (CRUD) To-Do tasks**
- 🔝 **Task Priority Management** (set priority levels: High, Medium, Low)
- 👤 **User Profile Management** (update name, profile picture, etc.)
- 📦 **MERN Stack Implementation** (MongoDB, Express, React, Node.js)
- 🔒 **Secure API with JWT Authentication**
- 🎨 **Tailwind CSS for UI Styling**
- 📡 **REST API with Axios Integration**

---

## 🏗️ Tech Stack
### 🌐 Frontend:
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- React Toastify

### ⚙️ Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt.js (password hashing)
- JSON Web Token (JWT) authentication
- Multer (file uploads)

---

## 📦 Installation & Setup

### 🔧 Backend Setup
```sh
cd backend
npm install
npm run dev  # Starts backend on http://localhost:5000
```

### 🌍 Frontend Setup
```sh
cd frontend
npm install
npm run dev  # Starts frontend on http://localhost:5173
```

### 🛠️ Environment Variables (Create a `.env` file in backend folder)
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=your_cloudinary_url  # If using image uploads
```

---

## 🔗 API Endpoints

### **Auth Routes**
- `POST /api/auth/register` → Register new user
- `POST /api/auth/login` → User login

### **To-Do Routes**
- `GET /api/todos` → Get all tasks
- `POST /api/todos` → Create a new task
- `PUT /api/todos/:id` → Update a task
- `DELETE /api/todos/:id` → Delete a task
- `PATCH /api/todos/:id/priority` → Update task priority

### **User Profile Routes**
- `GET /api/user/profile` → Get user profile
- `PUT /api/user/profile` → Update profile

---

## 📸 Screenshots
(Include screenshots of your app UI here)

---

## 🚀 Deployment
### **Backend** (Render, Railway, or Heroku)
```sh
git push origin main
```

### **Frontend** (Vercel, Netlify)
```sh
npm run build
```

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m 'Added new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request

---

