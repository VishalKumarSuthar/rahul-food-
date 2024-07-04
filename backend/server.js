import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js'; // Import the user router
import 'dotenv/config.js'
// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
})();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter); // Add the user router

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
