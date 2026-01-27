import path from "path";

import fs from "fs";

class fileHandler {
  readProducts(file: any) {
    let products;
    const data = fs.readFileSync(file, "utf8"); // 1
    products = JSON.parse(data);
    return products;
  }
}

module.exports = fileHandler;
