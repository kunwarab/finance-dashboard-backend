# 🚀 Finance Dashboard Backend



A production-ready backend system for managing financial transactions, user roles, and analytics dashboards with secure role-based access control.

---

## ✨ Features

* 👥 User & Role Management (Admin, Analyst, Viewer)
* 🔐 Secure Authentication using JWT
* 💰 Transaction Management (CRUD + Filters)
* 📊 Dashboard APIs:

  * Total Income
  * Total Expenses
  * Net Balance
* 🛡️ Role-Based Access Control
* 📄 Pagination & Filtering
* ✅ Input Validation
* 🧱 Clean Architecture (Controller → Service → DB)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Prisma ORM
* SQLite
* JWT
* bcrypt

---

## 📂 Project Structure

```
src/
├── controllers/
├── services/
├── routes/
├── middleware/
└── app.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/kunwarab/finance-dashboard-backend.git
cd finance-dashboard-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_secret_key"
PORT=5000
```

---

### 4️⃣ Setup Database

```bash
npx prisma migrate dev
npx prisma generate
```

---

### 5️⃣ Start Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🌐 Live API

👉 https://finance-dashboard-backend-toa8.onrender.com

---

## 📘 API Documentation

👉 https://finance-dashboard-backend-toa8.onrender.com/api-docs/
---

## 📡 API Endpoints

### 🔐 Auth

* POST `/api/auth/login`

### 💰 Transactions

* POST `/api/transactions`
* GET `/api/transactions`
* PUT `/api/transactions/:id`
* DELETE `/api/transactions/:id`

### 📊 Dashboard

* GET `/api/dashboard/summary`

---

## 🔒 Roles

* Viewer → Dashboard only
* Analyst → Transactions + analytics
* Admin → Full access

---

## 👨‍💻 Author

**Abhishek Singh**

---

## ⭐ Support

Give a ⭐ if you like this project!


