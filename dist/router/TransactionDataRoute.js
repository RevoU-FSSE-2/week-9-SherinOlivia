"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transactionrouter = express_1.default.Router();
const TransactionDataController_1 = __importDefault(require("../controllers/TransactionDataController"));
// get all transaction data
transactionrouter.get('/r', TransactionDataController_1.default.getAllTransactionData);
transactionrouter.get('/', TransactionDataController_1.default.getAllTransactionDataLocal);
// get transaction data per id
transactionrouter.get('/r/:id', TransactionDataController_1.default.getTransactionData);
transactionrouter.get('/:id', TransactionDataController_1.default.getTransactionDataLocal);
// post transaction data
transactionrouter.post('/', TransactionDataController_1.default.insertTransactionDataLocal);
// update (put) transaction data by id
transactionrouter.put('/:id', TransactionDataController_1.default.updateTransactionDataLocal);
//delete transaction data by id
transactionrouter.delete('/:id', TransactionDataController_1.default.deleteTransactionDataLocal);
exports.default = transactionrouter;
