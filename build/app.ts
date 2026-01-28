import express from "express";

let app = express();

app.use(express.json());

const routes = require("./routes/product");
app.use(routes);

app.listen(3000, () => {
  console.log("Server Running");
});
