"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dataFile = path_1.default.join(__dirname, "../../data/product.json");
const fileHandler = require("../utils/fileHandler");
class Product {
    constructor(id, title, price, description) {
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
