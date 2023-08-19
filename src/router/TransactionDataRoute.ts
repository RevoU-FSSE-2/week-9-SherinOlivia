import express from 'express'
const transactionrouter = express.Router()
import TransactionDataController  from '../controllers/TransactionDataController';

// get all transaction data
transactionrouter.get('/', TransactionDataController.getAllTransactionData);
// get transaction data per id
transactionrouter.get('/:id', TransactionDataController.getTransactionData);
// post transaction data
transactionrouter.post('/', TransactionDataController.insertTransactionData);
// update (put) transaction data by id
transactionrouter.put('/:id', TransactionDataController.updateTransactionData);
//delete transaction data by id
transactionrouter.delete('/:id', TransactionDataController.deleteTransactionData);
export default transactionrouter