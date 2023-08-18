import express from 'express'
const transactionrouter = express.Router()
import TransactionDataController  from '../controllers/TransactionDataController';

// get all transaction data
transactionrouter.get('/r', TransactionDataController.getAllTransactionData);
transactionrouter.get('/', TransactionDataController.getAllTransactionDataLocal);
// get transaction data per id
transactionrouter.get('/r/:id', TransactionDataController.getTransactionData);
transactionrouter.get('/:id', TransactionDataController.getTransactionDataLocal);
// post transaction data
transactionrouter.post('/', TransactionDataController.insertTransactionDataLocal);
// update (put) transaction data by id
transactionrouter.put('/:id', TransactionDataController.updateTransactionDataLocal);
//delete transaction data by id
transactionrouter.delete('/:id', TransactionDataController.deleteTransactionDataLocal);
export default transactionrouter