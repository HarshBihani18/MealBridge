const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const donationRoutes = require("./routes/donationRoutes");
const app = express();

const authRoutes = require("./routes/authRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);
app.get("/", (req, res) => {
  res.send("MealBridge API Running...");
});

const PORT = 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});