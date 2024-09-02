import express from "express";
import { getAllCategories } from "../services/categoryService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Something went wrong!");
  }
});

export default router;
