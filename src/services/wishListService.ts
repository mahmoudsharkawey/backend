import productModel from "../models/productModel";
import { wishListModel } from "../models/wishListModel";
interface CreateWishlistForUser {
  userId: string;
}
const createWihlistForUser = async ({ userId }: CreateWishlistForUser) => {
  const wishList = await wishListModel.create({ userId });
  await wishList.save();
  return wishList;
};
interface GetWishlistForUser {
  userId: string;
}
export const getWishlistForUser = async ({ userId }: GetWishlistForUser) => {
  let wishList;
  wishList = await wishListModel.findOne({ userId }).populate("items.product");
  if (!wishList) {
    wishList = await createWihlistForUser({ userId });
  }
  return wishList;
};
interface AddItemToWishlist {
  productId: any;
  userId: string;
}

export const addItemToWishlist = async ({
  productId,
  userId,
}: AddItemToWishlist) => {
  const wishlist = await getWishlistForUser({ userId });
  // Does the item exist in the cart ?
  const existsInWishlist = wishlist.items.find(
    (p) => p.product._id.toString() === productId
  );
  if (existsInWishlist) {
    return { data: "Item already exists in cart!", statusCode: 400 };
  }
  // Fetch the product
  const product = await productModel.findById(productId);
  if (!product) {
    return { data: "Product not found!", statusCode: 400 };
  }
  wishlist.items.push({
    product: productId,
  });
  await wishlist.save();
  return {
    data: await getWishlistForUser({ userId }),
    statusCode: 200,
  };
};

interface DeleteItemInCart {
  productId: any;
  userId: string;
}
export const deleteItemInWishlist = async ({
  userId,
  productId,
}: DeleteItemInCart) => {
  const wishList = await getWishlistForUser({ userId });
  const existsInWishlist = wishList.items.find(
    (p) => p.product._id.toString() === productId
  );
  if (!existsInWishlist) {
    return { data: "Item does not exist in wishlist", statusCode: 400 };
  }
  const otherWishlistItems = wishList.items.filter(
    (p) => p.product._id.toString() !== productId
  );
  wishList.items = otherWishlistItems;
  await wishList.save();
  return {
    data: await getWishlistForUser({ userId }),
    statusCode: 200,
  };
};
