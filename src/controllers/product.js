"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Products = require("../models/product");
exports.getProducts = (req, res, next) => {
    try {
        const products = Products.fetchProducts();
        console.log(products);
        res.status(200).json({ products });
    }
    catch (err) {
        console.log("Error fetching products:", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
};
