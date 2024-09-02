import express from "express";
import categoryModel from "../models/category";

const router = express.Router();

router.post("/categories", async (request, response) => {
  try {
    const { name, description } = request.body;
    const newCategory = new categoryModel({ name, description });
    await newCategory.save();
    response.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.get("/categories", async (request, response) => {
  try {
    const categories = await categoryModel.find();
    response.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.put("/categories/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description } = request.body;
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    response.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.delete("/categories/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await categoryModel.findByIdAndDelete(id);
    response.status(204).send();
  } catch (error) {
    console.error("Error deleting category:", error);
    response.status(500).send("Something went wrong!");
  }
});

export default router;
