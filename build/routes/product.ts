import express from "express";

const productControllers = require("../controllers/product");

const route = express.Router();

route.get("/products", productControllers.getProducts);

// route.get("products/:id");

// route.post("products");

// route.put("products/:id");

// route.delete("products/:id");

// route.post("products/:id/add");

// route.post("products/:id/sell");

module.exports = route;
