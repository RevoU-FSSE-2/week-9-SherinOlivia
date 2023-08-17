import express from 'express'
const transactionrouter = express.Router()
import TransactionDataController  from '../controllers/TransactionDataController';

// get all transaction data
transactionrouter.get('/', TransactionDataController.getAllTransactionData);
// transactionrouter.get('/', TransactionDataController.getAllTransactionDataLocal);
// get transaction data per id
transactionrouter.get('/:id', TransactionDataController.getTransactionData);
// transactionrouter.get('/:id', TransactionDataController.getTransactionDataLocal);
// post transaction data
// transactionrouter.post('/', TransactionDataController.insertTransactionDataLocal);
export default transactionrouter