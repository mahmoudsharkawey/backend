import express from "express";
import {
  createCategory,
  getAllCategories,
  updateCategoryById,
  deleteCategoryById
} from "../services/category";

const router = express.Router();

router.post("", async (request, response) => {
  try {
    const { name, description } = request.body;
    const newCategory = await createCategory(name, description);
    // await newCategory.save();
    response.status(201).json(newCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.get("", async (request, response) => {
  try {
    const categories = await getAllCategories();
    response.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description } = request.body;
    const updatedCategory = await updateCategoryById(id, name, description);
    response.status(200).json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    response.status(500).send("Something went wrong!");
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await deleteCategoryById(id);
    response.status(204).send();
  } catch (error) {
    console.error("Error deleting category:", error);
    response.status(500).send("Something went wrong!");
  }
});

export default router;
