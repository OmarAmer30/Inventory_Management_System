import path from "path";

const dataFile = path.join(__dirname, "../../data/sales.json");

const fileHandler = require("../utils/fileHandler");

class Sell {
  static counter = 0;
  id: number;
  productId: number;
  qty: number;
  price: number;

  constructor(productId: number, qty: number, price: number) {
    this.id = Sell.counter;
    this.productId = productId;
    this.qty = qty;
    this.price = price * qty;
    Sell.counter++;
  }

  static async sellProduct(
    productId: number,
    qty: number,
    productPrice: number,
  ) {
    try {
      const sales: Sell[] = await fileHandler.read(dataFile);
      const newSale = new Sell(productId, qty, productPrice);

      if (sales.length > 0) {
        const maxId = Math.max(...sales.map((p: { id: number }) => p.id));
        Sell.counter = maxId + 1;
        newSale.id = Sell.counter;
      }
      sales.push(newSale);
      await fileHandler.write(dataFile, sales);
    } catch (err) {
      console.error("Failed to sell product:", err);
      throw err;
    }
  }
}

module.exports = Sell;
