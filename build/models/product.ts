import path from "path";

const dataFile = path.join(__dirname, "../../data/product.json");

const fileHandler = require("../utils/fileHandler");

class Product {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  static fetchProducts() {
    const products = fileHandler.read(dataFile);
    return products;
  }
}
module.exports = Product;
