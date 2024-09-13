import mongoose, { Schema, ObjectId, Document } from "mongoose";
import { IProduct } from "./productModel";

export interface IWishlistItem {
  product: IProduct;
}

export interface IWishlist extends Document {
  userId: ObjectId | string;
  items: IWishlistItem[];
}

const WishlistItemSchema = new Schema<IWishlistItem>({
  product: { type: Schema.Types.ObjectId, ref: "Products", required: true },
});

const wishListSchema = new Schema<IWishlist>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [WishlistItemSchema],
});

export const wishListModel = mongoose.model<IWishlist>("Wishlist", wishListSchema);
