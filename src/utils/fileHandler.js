"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function readProducts(file) {
    try {
        const data = fs_1.default.readFileSync(file, "utf8"); // 1
        const products = JSON.parse(data);
        return products;
    }
    catch (error) {
        console.log(error);
        throw new Error(`Failed to parse JSON from file: ${file}`);
    }
}
function writeProducts(file, products) {
    const data = JSON.stringify(products);
    try {
        fs_1.default.writeFileSync(file, data);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
exports.read = readProducts;
exports.write = writeProducts;
