"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
let app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(path_1.default.join(__dirname, "./controllers/product.ts"));
app.listen(3000, () => {
    console.log("Server Running");
});
