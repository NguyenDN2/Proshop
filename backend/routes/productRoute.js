import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../model/productModel.js";

// @desc  Fetch all products
// @Route GET /api/products
// @accesss  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc  Fetch single products
// @Route GET /api/products/:id
// @accesss  Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
