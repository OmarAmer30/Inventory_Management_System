import express from "express";
import path from "path";

let app = express();

app.use(express.json());

app.use(path.join(__dirname, "./controllers/product.ts"));

app.listen(3000, () => {
  console.log("Server Running");
});
