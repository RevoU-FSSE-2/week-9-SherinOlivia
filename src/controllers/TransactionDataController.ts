import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
const router = express.Router();

// ALL TRANSACTION DATA
const getAllTransactionData = (req: Request, res: Response) => {
    DB.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            DB.query("SELECT * FROM transaction", function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })
}

// TRANSACTION DATA BY ID
const getTransactionData = (req: Request, res: Response) => {
    DB.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            DB.query("SELECT id FROM transaction", function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })
}


// ALL TRANSACTION DATA (LOCAL)
const getAllTransactionDataLocal = (req: Request, res: Response) => {
    DBLocal.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            DBLocal.query("SELECT * FROM transaction", function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })
}

// TRANSACTION DATA BY ID (LOCAL)
const getTransactionDataLocal = (req: Request, res: Response) => {
    DBLocal.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            DBLocal.query(`SELECT * FROM transaction WHERE id= ${req.params.id}`, function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })
}



const TransactionDataController = { getAllTransactionData, getAllTransactionDataLocal, getTransactionData, getTransactionDataLocal }
export default TransactionDataController