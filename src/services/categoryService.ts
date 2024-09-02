import categoryModel from "../models/categoryModel";

export const getAllCategories = async () => {
  return await categoryModel.find();
};

export const seedInitialCategories = async () => {
  try {
    const categoties = [
      {
        name: "Men's",
        description: "A stylish and durable men's denim jacket.",
      },
      {
        name: "Women's",
        description: "A light and breezy summer dress for women.",
      },
      {
        name: "Kid's",
        description: "A cozy unisex hoodie with a soft interior lining.",
      },
    ];

    const existingCategoties = await getAllCategories();

    if (existingCategoties.length === 0) {
      await categoryModel.insertMany(categoties);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};
