import { ObjectId } from "mongoose";
import { IWishListItem, wishListModel } from "../models/wishListModel";

export const getWishList = async (userId: ObjectId) => {
  let wishList;
  wishList = await wishListModel.findOne({ userId });
  if (!wishList) {
    wishList = await createWishList(userId);
  }
  return wishList;
};

export const createWishList = async (userId: ObjectId) => {
  const newWishList = new wishListModel({ userId, items: [] });
  return await newWishList.save();
};

export const addItem = async (userId: ObjectId, product: IWishListItem) => {
  let wishList = await getWishList(userId);
  let isExist = wishList.items.find(
    (item) => item.productId == product.productId
  );
  if (!isExist) {
    wishList.items.push(product);
  }
  return await wishList.save();
};

export const removeItem = async (userId: ObjectId, productId: string) => {
  let wishList = await getWishList(userId);
  wishList.items.forEach((item, indx) => {
    if (item.productId.toString() == productId) {
      wishList.items.splice(indx, 1);
    }
  });
  return await wishList.save();
};

export const clearWishList = async (userId: ObjectId) => {
  let wishList = await getWishList(userId);
  wishList.items = [];
  return await wishList.save();
};
