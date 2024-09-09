import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        id: 1,
        title: "Drawer Small Bedside Table",
        image:
          "https://images.dunelm.com/30832616.jpg?$standardplayerdefault$&img404=noimagedefault",
        price: 599.99,
        stock: 50,
        category: "bedroom",
        rating: 4.5,
        discount: 10
      },
      {
        id:2,
        title: "Jayden Counter Height Bar Stool",
        image:
          "https://images.dunelm.com/30891311.jpg?$standardplayerdefault$&img404=noimagedefault",
        price: 999.99,
        stock: 30,
        category: "kitchen",
        rating: 4.5,
        discount: 10,
      },
      {
        id:3,
        title: "Harlow Flatweave Storage Double Sofa Bed",
        image:
          "https://images.dunelm.com/30910742.jpg?$standardplayerdefault$&img404=noimagedefault",
        price: 149.99,
        stock: 0,
        category: "living_room",
        rating: 4.8,
        discount: 15,
      },
      {
        id:4,
        title: "Dining Table",
        image:
          "https://images.dunelm.com/30890245.jpg?$standardplayerdefault$&img404=noimagedefault",
        price: 399.99,
        stock: 20,
        category: "dining_room",
        rating: 4.2,
      },
      {
        id:5,
        title: "Obaby Grace Mini Cot Bed",
        image:
          "https://images.dunelm.com/30844493.jpg?$standardplayerdefault$&img404=noimagedefault",
        price: 399.99,
        stock: 20,
        category: "children_room",
        rating: 4.5,
        discount: 30
      }
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};
