import express from "express";
import { ExtendRequest } from "../types/extendedRequest";
import {
  addItem,
  clearWishList,
  getWishList,
  removeItem,
} from "../services/wishListService";
import validateJWT from "../middlewares/validateJWT";
import { IWishListItem } from "../models/wishListModel";

const router = express.Router();

router.get("/", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req.user?._id;
    const wishList = await getWishList(userId);
    res.status(200).send(wishList);
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

router.post("/", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req.user?._id;
    const productId: IWishListItem = req.body;
    const updatedWishList = await addItem(userId, productId);
    res.status(200).send(updatedWishList);
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

router.delete("/:productId", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req.user?._id;
    const productId = req.params.productId;
    const updatedWishList = await removeItem(userId, productId);
    res.status(200).send(updatedWishList);
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

router.delete("/", validateJWT, async (req: ExtendRequest, res) => {
  try {
    const userId = req.user?._id;
    const updatedWishList = await clearWishList(userId);
    res.status(200).send(updatedWishList);
  } catch (err) {
    res.status(500).send("Something went wrong!");
  }
});

export default router;
