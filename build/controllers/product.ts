import { Request, Response, NextFunction } from "express";

const Products = require("../models/product");

exports.getProducts = (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = Products.fetchProducts();
    console.log(products);
    res.status(200).json({ products });
  } catch (err) {
    console.log("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
