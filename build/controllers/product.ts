import { Request, Response, NextFunction } from "express";

const Products = require("../models/product");

exports.getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await Products.fetchProducts();
    console.log(products);
    res.status(200).json({ products });
  } catch (err) {
    console.log("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.addProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newProducts = req.body;
    await Products.addProducts(JSON.parse(newProducts));
    const updatedProducts = await Products.fetchProducts();
    console.log(updatedProducts);
    res.status(201).json({ message: "Products added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add products" });
  }
};
