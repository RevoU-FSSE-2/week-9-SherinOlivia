import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
const router = express.Router();
// import redis from 'ioredis';
// const redisCon = new redis(
// host: 'localhost'
// port: 6379
// )
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

// ================================LOCAL======================================

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

// TRANSACTION DATA BY USER_ID (LOCAL)
const getTransactionDataLocal = (req: Request, res: Response) => {
    DBLocal.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            DBLocal.query(`SELECT * FROM transaction WHERE user_id= ${req.params.id}`, function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })
}


// CREATE NEW ROW/ DATA ENTRY (LOCAL)

    const insertTransactionDataLocal = (req: Request, res: Response) => {
        DBLocal.connect(function(err){
            if(err){
                res.status(400).send(err)
            }else {
                const {type, amount, user_id} = req.body;
                DBLocal.query(`INSERT INTO transaction SET user_id=${user_id}, \`type\`='${type}', amount=${amount}`, function(err, result, fields){
                    if(err){           
                        res.status(400).send(err)
                    }else {
                        return res.status(200).send(result);
                    }
                })
            }
        })
    
}

//     const insertTransactionDataLocal = async (req: Request, res: Response) => {

//         // try {
//         //     DBLocal.connect(function(err){
//         //     const { type, amount, user_id } =  req.body;
//         //     const result: any = await DBLocal.query(`INSERT INTO transaction SET user_id=${user_id}, \`type\`='${type}', amount=${amount}`)
//         //      res.status(200).send(result.insertId);  
//         //     }        
//         //  } catch (error) {
//         //     res.status(400).send(err)
//         // }
    
// }


// CREATE NEW ROW/ DATA ENTRY (LOCAL)

const deleteTransactionDataLocal = (req: Request, res: Response) => {
    DBLocal.connect(function(err){
        if(err){
            res.status(400).send(err)
        }else {
            const {type, amount, user_id} = req.body;
            DBLocal.query(``, function(err, result, fields){
                if(err){           
                    res.status(400).send(err)
                }else {
                    return res.status(200).send(result);
                }
            })
        }
    })

}


const TransactionDataController = { getAllTransactionData, getAllTransactionDataLocal, getTransactionData, getTransactionDataLocal, insertTransactionDataLocal }
export default TransactionDataController