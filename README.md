# 🚀 Finance Dashboard Backend

<p align="center">
  
</p>

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
  * Category Breakdown
* 🛡️ Role-Based Access Control
* 📄 Pagination & Filtering
* ✅ Input Validation using Zod
* 🧱 Clean Architecture (Controller → Service → DB)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Prisma ORM
* SQLite (can be switched to PostgreSQL)
* Zod (Validation)
* JWT (Authentication)
* bcrypt (Password Hashing)

---

## 📂 Project Structure

```
src/
├── controllers/
├── services/
├── routes/
├── middleware/
├── utils/
├── config/
└── app.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone git@github.com:kunwarab/finance-dashboard-backend.git
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

Server will run at:

```
http://localhost:5000
```

---

## 🌐 Live API

```
https://finance-dashboard-backend-toa8.onrender.com
```

---

## 📘 API Documentation (Swagger)

```

```

---

## 🔑 Demo Credentials

```
Email: admin@test.com
Password: 123456
Role: ADMIN
```

---

## 📡 API Endpoints

### 🔐 Authentication

* POST `/api/auth/login`

---

### 👤 Users (Admin Only)

* POST `/api/users`

---

### 💰 Transactions

* POST `/api/transactions`
* GET `/api/transactions`
* PUT `/api/transactions/:id`
* DELETE `/api/transactions/:id`

---

### 📊 Dashboard

* GET `/api/dashboard/summary`

---

## 🔒 Roles & Permissions

| Role    | Access Level                  |
| ------- | ----------------------------- |
| Viewer  | View dashboard                |
| Analyst | View transactions + analytics |
| Admin   | Full access                   |

---

## 📌 Important Notes

* All data is user-specific and secured
* Role-based middleware restricts unauthorized access
* Validation ensures safe API usage

---

## 🚀 Future Improvements

* 🌐 Deployment enhancements
* 📘 Advanced API documentation
* 🧪 Unit & Integration Testing
* 🚦 Rate Limiting & Security

---

## 👨‍💻 Author

**Abhishek Singh**

---

## ⭐ Support

If you found this project helpful, give it a ⭐ on GitHub!
