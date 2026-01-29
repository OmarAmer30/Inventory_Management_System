import path from "path";

const dataFile = path.join(__dirname, "../../data/product.json");

const fileHandler = require("../utils/fileHandler");

class Product {
  id: number;
  title: string;
  price: number;
  qty: number;
  description: string;

  constructor(
    id: number,
    title: string,
    price: number,
    qty: number,
    description: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.qty = qty;
    this.description = description;
  }

  static fetchProducts() {
    const products = fileHandler.read(dataFile);
    return products;
  }

  static addProducts(newProducts: Product[]) {
    try {
      const products: Product[] = fileHandler.read(dataFile);
      products.push(...newProducts);
      fileHandler.write(dataFile, products);
    } catch (err) {
      console.error("Failed to add products:", err);
      throw err;
    }
  }
}
module.exports = Product;
