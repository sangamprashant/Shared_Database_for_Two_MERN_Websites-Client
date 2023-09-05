const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = 5000;

const mongoose = require("mongoose");
const http = require("http").createServer(app);
const cors = require("cors");
const path = require("path");

// Enable CORS
app.use(cors());

app.use(express.json());

require("./models/sharedUser"); 

app.use(require("./routes/user"));

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
mongoose.connection.on("error", () => {
  console.log("Failed to connect to mongo");
});

// Serve the frontend
// app.use(express.static(path.join(__dirname, "drdoc/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "drdoc/build/index.html"), function (err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });



http.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});