import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
    name: string;
    description?: string;
}

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
    description: { type: String },
});

const categoryModel = mongoose.model<ICategory>('Category', categorySchema);

export default categoryModel;
