import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Men's Denim Jacket",
        description:
          "A stylish and durable men's denim jacket, perfect for casual wear. Made from high-quality denim fabric for long-lasting comfort.",
        category: "men",
        image: "https://example.com/images/denim-jacket.jpg",
        price: 3000,
        stock: 15,
      },
      {
        title: "Women's Summer Dress",
        description:
          "A light and breezy summer dress for women, ideal for warm weather and beach outings. Features a floral print and a comfortable fit.",
        category: "women",
        image: "https://example.com/images/summer-dress.jpg",
        price: 2000,
        stock: 25,
      },
      {
        title: "Unisex Hoodie",
        description:
          "A cozy unisex hoodie with a soft interior lining. Perfect for layering during cooler weather, available in multiple colors.",
        category: "kids",
        image: "https://example.com/images/unisex-hoodie.jpg",
        price: 2500,
        stock: 30,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};
