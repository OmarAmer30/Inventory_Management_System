import { Request, Response, NextFunction, response } from "express";

const Products = require("../models/product");
const Sell = require("../models/sales");

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
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
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

    if (index === -1) {
      return res.status(404).json({ error: "Product not found" });
    }

    await Products.deleteProduct(id);
    res.status(200).json({ msg: `Product with id: ${id} deleted` });
  } catch (err) {
    console.log("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.addQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const qty = req.body.qty || 1;

    await Products.addQuantity(id, qty);
    res
      .status(200)
      .json({ msg: `Product with id: ${id} has increased it's quantity` });
  } catch (err) {
    console.log("Error adding quantity:", err);
    res.status(500).json({ error: "Failed to adding quantity" });
  }
};
exports.updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const updatedData = {
      title: req.body.title,
      price: req.body.price,
      qty: req.body.qty,
      description: req.body.description,
    };

    const updatedProduct = await Products.updateProduct(id, updatedData);
    return res.status(200).json({ updatedProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update product" });
  }
};

exports.sellProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = parseInt(req.params.id);
    let quantity = req.body.qty;

    if (quantity === undefined) quantity = 1;
    
    const product = await Products.fetchProducts(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (quantity < 1)
      return res.status(404).json({ error: "Invalid quantity" });

    if (product.qty < quantity)
      return res
        .status(404)
        .json({ error: "Not enough quantity in the inventory" });

    await Products.updateProduct(productId, { qty: product.qty - quantity });
    await Sell.sellProduct(productId, quantity, product.price);
    return res.status(200).json({ msg: "Successful sell product" });
  } catch (err) {
    console.error("Error selling product:", err);
    res.status(500).json({ error: "Failed to sell product" });
  }
};
