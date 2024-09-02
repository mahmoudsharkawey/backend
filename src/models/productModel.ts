import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
//   category: string;
  image: string;
  price: number;
  stock: number;
  category: mongoose.Types.ObjectId; // Reference to Category
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String, required: true },
//   category: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
});

const productModel = mongoose.model<IProduct>("Product", productSchema);

export default productModel;
