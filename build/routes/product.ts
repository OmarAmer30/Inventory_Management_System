import express from "express";

const productControllers = require("../controllers/product");

const route = express.Router();

route.get("/products", productControllers.getProducts);

route.get("/products/:id", productControllers.getProductById);

route.post("/products", productControllers.addProducts);

route.put("/products/:id", productControllers.updateProduct);

route.delete("/products/:id", productControllers.deleteProduct);

route.post("/products/:id/add/", productControllers.addQuantity);

// route.post("products/:id/sell");

module.exports = route;
