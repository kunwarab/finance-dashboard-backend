require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const specs = require("../swagger");


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Finance Dashboard API is running 🚀",
    endpoints: {
      auth: "/api/auth",
      users: "/api/users",
      transactions: "/api/transactions",
      dashboard: "/api/dashboard"
    }
  });
});
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/dashboard", require("./routes/dashboardRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});