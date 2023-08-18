"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const railwaytransrouter = express_1.default.Router();
const TransactionDataController_1 = __importDefault(require("../controllers/TransactionDataController"));
// get all transaction data
railwaytransrouter.get('/', TransactionDataController_1.default.getAllTransactionData);
// get transaction data per id
railwaytransrouter.get('/:id', TransactionDataController_1.default.getTransactionData);
// post transaction data
// railwaytransrouter.post('/', TransactionDataController.insertTransactionData);
exports.default = railwaytransrouter;
