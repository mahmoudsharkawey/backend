import categoryModel from "../models/category";

export const createCategory = async (name: string, description: string) => {
    const newCategory = new categoryModel({ name, description });
    return await newCategory.save();
};

export const getAllCategories = async () => {
    return await categoryModel.find();
};

export const updateCategoryById = async (id: string, name: string, description: string) => {
    return await categoryModel.findByIdAndUpdate(
        id,
        { name, description },
        { new: true }
    );
};

export const deleteCategoryById = async (id: string) => {
    return await categoryModel.findByIdAndDelete(id);
};
