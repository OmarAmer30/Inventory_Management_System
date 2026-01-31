import fs from "fs";

function readProducts(file: string) {
  try {
    const data = fs.readFileSync(file, "utf8");
    const products = JSON.parse(data);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to parse JSON from file: ${file}`);
  }
}

function writeProducts(file: string, products: any[]) {
  const data = JSON.stringify(products, null, 4);
  try {
    fs.writeFileSync(file, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

exports.read = readProducts;
exports.write = writeProducts;
