"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.get('products');
route.get('products/:id');
route.post('products');
route.put('products/:id');
route.delete('products/:id');
route.post('products/:id/add');
route.post('products/:id/sell');
module.exports = route;
