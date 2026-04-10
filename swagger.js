const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
  openapi: "3.0.0",
  info: {
    title: "Finance Dashboard API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://finance-dashboard-backend-toa8.onrender.com",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
},
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;