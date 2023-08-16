import express, { Request, Response } from 'express';
import { transactions, Itransaction } from "../data/transactionData";

const router = express.Router();

export const getAllTransactionData = (req: Request, res: Response) => {
    res.status(200).json({
      message: "Successfully 'get' all Transaction Data",
      transactions,
    })
  }