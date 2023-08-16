"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTransactionData = void 0;
const express_1 = __importDefault(require("express"));
const transactionData_1 = require("../data/transactionData");
const router = express_1.default.Router();
const getAllTransactionData = (req, res) => {
    res.status(200).json({
        message: "Successfully 'get' all Transaction Data",
        transactions: transactionData_1.transactions,
    });
};
exports.getAllTransactionData = getAllTransactionData;
