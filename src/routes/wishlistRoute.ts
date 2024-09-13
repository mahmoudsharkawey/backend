import express from "express";
import { ExtendRequest } from "../types/extendedRequest";
import validateJWT from "../middlewares/validateJWT";
import {
  addItemToWishlist,
  deleteItemInWishlist,
  getWishlistForUser,
} from "../services/wishListService";
// import { IWishListItem } from "../models/wishListModel";

const router = express.Router();

router.get("/", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req?.user?._id;
    const cart = await getWishlistForUser({ userId });
    res.status(200).send(cart);
  } catch (err) {
    res.status(500).send("Something went wrong in cart!");
  }
});

router.post("/items", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req?.user?._id;
    const { productId } = req.body;
    const response = await addItemToWishlist({ userId, productId });
    res.status(response.statusCode).send(response.data);
  } catch {
    res.status(500).send("Something went wrong! when addd ");
  }
});

router.delete(
  "/items/:productId",
  validateJWT,
  async (req: ExtendRequest, res) => {
    try {
      const userId = req?.user?._id;
      const { productId } = req.params;
      const response = await deleteItemInWishlist({ userId, productId });
      res.status(response.statusCode).send(response.data);
    } catch {
      res.status(500).send("Something went wrong!");
    }
  }
);

export default router;
