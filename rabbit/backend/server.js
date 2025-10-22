// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({
    status: "success",
    message: "This is sample API data!",
    data: { name: "Darshan", project: "Big Data Analytics" },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}`);
});
