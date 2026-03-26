import { Request, Response, NextFunction } from "express";

const Sale = require("../models/sales");

exports.getSales = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sales = await Sale.fetchSales();
    return res.status(200).json({ sales });
  } catch (err) {
    console.log("Error fetching sales:", err);
    return res.status(500).json({ error: "Failed to fetch sales" });
  }
};

exports.getSalesByProductId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.id;
    const sales = await Sale.fetchSales(productId);
    return res.status(200).json({ sales });
  } catch (err) {
    console.log("Error fetching sales:", err);
    return res.status(500).json({ error: "Failed to fetch sales" });
  }
};
