"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class fileHandler {
    readProducts(file) {
        let products;
        const data = fs_1.default.readFileSync(file, "utf8"); // 1
        products = JSON.parse(data);
        return products;
    }
}
module.exports = fileHandler;
