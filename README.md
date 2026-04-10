📌 Finance Dashboard Backend

A backend system for managing financial transactions, user roles, and analytics dashboards with role-based access control.

🚀 Features
User & Role Management (Admin, Analyst, Viewer)
Secure Authentication (JWT)
Transaction Management (CRUD + Filters)
Dashboard APIs (Summary, Trends, Category Breakdown)
Role-Based Access Control
Pagination & Validation
Clean Architecture (Controller → Service → DB)
🛠️ Tech Stack
Node.js
Express.js
Prisma ORM
PostgreSQL (or SQLite)
Zod (Validation)
JWT (Authentication)
📂 Project Structure
src/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── middleware/
 ├── utils/
 ├── config/
 └── app.js
⚙️ Setup Instructions
1. Clone Repo
git clone <your-repo-link>
cd finance-dashboard-backend
2. Install Dependencies
npm install
3. Setup Environment

Create .env:

DATABASE_URL=your_db_url
JWT_SECRET=your_secret
PORT=5000
4. Run Prisma
npx prisma migrate dev
npx prisma generate
5. Start Server
npm run dev
🔐 Roles & Permissions
Action	Viewer	Analyst	Admin
View Transactions	✅	✅	✅
Create Transaction	❌	❌	✅
Update/Delete	❌	❌	✅
View Dashboard	✅	✅	✅
Manage Users	❌	❌	✅
📊 API Endpoints
👤 Users
POST /api/users
GET /api/users
💰 Transactions
POST /api/transactions
GET /api/transactions?page=1&limit=10
PATCH /api/transactions/:id
DELETE /api/transactions/:id
📊 Dashboard
GET /api/dashboard/summary
GET /api/dashboard/category
GET /api/dashboard/trends
📈 Sample Response
Summary
{
  "income": 5000,
  "expense": 2000,
  "balance": 3000
}
🧠 Design Decisions
Used service layer for business logic separation
Implemented RBAC (Role-Based Access Control) using middleware
Used Prisma ORM for clean database queries
Applied Zod validation for input safety
Ensured user-level data isolation
⚠️ Assumptions
Authentication is simplified using JWT
Single currency system
No external payment integration
🚀 Future Improvements
Add refresh tokens
Add unit tests
Add Swagger API docs
Add caching (Redis)
Deploy on cloud (Render / AWS)