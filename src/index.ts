import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import categoryRoute from "./routes/categotyRoute";
import wishListRouter from "./routes/wishlistRoute";
import { seedInitialProducts } from "./services/productService";
import { seedInitialCategories } from "./services/categoryService";
// import connectDB from "./config/db";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// const url = "mongodb://localhost:27017/mySystem";
// mongoose
//   .connect(url)
//   .then(() => console.log("Mongo connected!"))
//   .catch((err) => console.log("Failed to connect!", err));

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Mongo connected!"))
  .catch((err) => console.log("Failed to connect!", err));

// Seed the products to database
seedInitialProducts();
seedInitialCategories();


// connectDB();
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/categories", categoryRoute);
app.use("/wishlist", wishListRouter);

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
