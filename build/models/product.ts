import path from "path";

const dataFile = path.join(__dirname, "../../data/product.json");

const fileHandler = require("../utils/fileHandler");

class Product {
  static counter = 1;
  id: number;
  title: string;
  price: number;
  qty: number;
  description: string;

  constructor(title: string, price: number, qty: number, description: string) {
    this.id = Product.counter;
    this.title = title;
    this.price = price;
    this.qty = qty;
    this.description = description;
    Product.counter++;
  }

  static async fetchProducts(id: number | null = null) {
    const products = await fileHandler.read(dataFile);
    if (id === null) return products;
    const product = products.find((p: Product) => p.id == id);

    return product;
  }

  static async addProducts(newProducts: Product[]) {
    try {
      const products: Product[] = await this.fetchProducts();
      if (products.length > 0) {
        const maxId = Math.max(...products.map((p: { id: number }) => p.id));
        Product.counter = maxId + 1;
      }
      newProducts.forEach((p) => {
        if (!p.id) {
          p.id = Product.counter++;
        }
      });
      products.push(...newProducts);
      await fileHandler.write(dataFile, products);
    } catch (err) {
      console.error("Failed to add products:", err);
      throw err;
    }
  }

  static async deleteProduct(id: number) {
    const products: Product[] = await this.fetchProducts();
    const index = products.findIndex((p: Product) => p.id === id);

    if (index === -1) throw new Error("Product id is wrong or not exist");

    products.splice(index, 1);
    await fileHandler.write(dataFile, products);
  }

  static async addQuantity(id: number, quantity: number) {
    try {
      const products: Product[] = await this.fetchProducts();
      const index = products.findIndex((p: Product) => p.id == id);

      if (index === -1) throw new Error("Product id is wrong or not exist");

      products[index].qty += quantity;
      await fileHandler.write(dataFile, products);
    } catch (err) {
      console.error("Failed to add quantity", err);
      throw err;
    }
  }

  static async updateProduct(id: number, updatedProduct: Product) {
    try {
      const products: Product[] = await this.fetchProducts();
      const index = products.findIndex((p: Product) => p.id == id);

      if (index === -1) throw new Error("Product id is wrong or not exist");

      products[index].price = updatedProduct.price ?? products[index].price;
      products[index].qty = updatedProduct.qty ?? products[index].qty;
      products[index].qty = updatedProduct.qty || products[index].qty;
      products[index].description =
        updatedProduct.description || products[index].description;

      await fileHandler.write(dataFile, products);
      return products[index];
    } catch (err) {
      console.error("Failed to update product:", err);
      console.log(err);
      throw err;
    }
  }
}
module.exports = Product;
