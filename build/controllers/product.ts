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

exports.getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const product = await Products.fetchProducts(productId);
    if (product === undefined) throw new Error("Id is Null");
    res.status(200).json({ product });
  } catch (err) {
    console.log("Error fetching product:", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

exports.addProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newProducts = req.body;

    if (!Array.isArray(newProducts) || newProducts.length === 0) {
      return res
        .status(400)
        .json({ error: "Request body must be a non-empty array of products" });
    }

    for (const p of newProducts) {
      if (p.title == null || p.price == null || p.qty == null) {
        return res
          .status(400)
          .json({ error: "Invalid product format in request body" });
      }
    }

    await Products.addProducts(newProducts);
    const updatedProducts = await Products.fetchProducts();
    res.status(201).json({
      message: "Products added successfully",
      products: updatedProducts,
    });
  } catch (err) {
    console.log("Error adding products:", err);
    res.status(500).json({ error: "Failed to add products" });
  }
};

exports.deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const products = await Products.fetchProducts();
    const index = products.findIndex((p: any) => p.id == id);

    if (index == undefined) throw new Error("Id is undefined");

    await Products.deleteProduct(id);
    res.status(200).json({ msg: `Product with id: ${id} deleted` });
  } catch (err) {
    console.log("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
