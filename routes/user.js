const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("sharedUser");
const jwt = require("jsonwebtoken");

// Define a route to fetch and view all users
router.get("/api/view/users", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({ account: "user" });

    // Send the users as a JSON response
    res.json(users);
  } catch (error) {
    // Handle any errors and respond with an error message
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});
module.exports = router;
