const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = []; // temporary storage

// SIGNUP
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.json({ message: "User already exists" });
  }

  users.push({ name, email, password });

  res.json({ message: "Signup successful" });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});