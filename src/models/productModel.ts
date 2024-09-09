import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  id: number;
  title: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  rating: number; 
  discount?: number; 
}

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true },
  discount: { type: Number, default: 0 }
});

const productModel = mongoose.model<IProduct>("Products", productSchema);

export default productModel;
