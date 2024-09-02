import mongoose, { ObjectId, Schema } from "mongoose";

export interface IWishListItem {
  productId: ObjectId;
}

export interface IWishList {
  userId: ObjectId;
  items: IWishListItem[];
}

const wishListItemSchema = new Schema<IWishListItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  },
  {
    _id: false,
  }
);

const wishListSchema = new Schema<IWishList>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [wishListItemSchema],
});

export const wishListModel = mongoose.model<IWishList>(
  "WishList",
  wishListSchema
);
