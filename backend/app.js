const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 5000;

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Mock data
const mockData = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  name: `index-${index + 1}`,
  even:
    index % 2 === 0 ? "Hello Arjun From Pune" : "Hello Arjun from Bangalore",
  odd: index % 3 === 0 ? "Hello Arjun From USA" : "Hello Arjun from Canada",
}));

const mockAuthors = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  name: `Author ${index + 1}`,
  bio: `This is a short bio of Author ${index + 1}.`,
  image: `https://via.placeholder.com/600/771796`,
  location: `Location ${index + 1}`,
}));

app.get("/api/authors", async (req, res) => {
  try {
    res.json(mockAuthors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Base API endpoint to check server status
app.get("/api", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      message: "Hello from the backend! New data added is here",
      time: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// New API to fetch mock users
app.get("/api/users", async (req, res) => {
  try {
    res.json(mockData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// New API to fetch mock users
app.get("/api/authors", async (req, res) => {
  try {
    res.json(mockData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port || 5003, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
