import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import { seedInitialProducts } from "./services/productService";
import cors from "cors";
import { seedInitialCategories } from "./services/categoryService";

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017/mySystem"; 

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


// mongoose
//   .connect(process.env.DATABASE_URL || "")
//   .then(() => console.log("Mongo connected!"))
//   .catch((err) => console.log("Failed to connect!", err));

// Seed the products to database
seedInitialProducts();
seedInitialCategories();

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
