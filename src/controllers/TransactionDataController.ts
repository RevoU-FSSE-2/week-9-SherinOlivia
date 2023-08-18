import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
// import { redisCon } from '../config/redisconnection';
import { errorHandling, query } from './errorHandling';
import { error } from 'console';



// ALL TRANSACTION DATA
const getAllTransactionData = (req: Request, res: Response) => {
    DB.query("SELECT * FROM week9.transaction", function(err, result, fields) {
        if(err){           
            console.error(err)
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"))
            res.end()
            return
        } else {
            res.status(200).json(errorHandling(result, null))
            res.end()
        }
    })
}

// TRANSACTION DATA BY ID
const getTransactionData = (req: Request, res: Response) => {
    DB.query(`SELECT * FROM week9.transaction WHERE user_id= ${req.params.id}`, function(err, result, fields){
        if(err){           
            console.error(err)
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"))
            res.end()
            return
        } else {
            res.status(200).json(errorHandling(result, null))
            res.end()
        }
    })
}

// ================================LOCAL======================================

// ALL TRANSACTION DATA (LOCAL)
const getAllTransactionDataLocal = (req: Request, res: Response) => {
    DBLocal.query("SELECT * FROM week9.transaction", function(err, result, fields) {
        if(err){           
            console.error(err)
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"))
            res.end()
            return
        } else {
            res.status(200).json(errorHandling(result, null))
            res.end()
        }
    })
}

// TRANSACTION DATA BY USER_ID (LOCAL)
const getTransactionDataLocal = (req: Request, res: Response) => { 
    DBLocal.query(`SELECT * FROM week9.transaction WHERE user_id= ${req.params.id}`, function(err, result, fields){
        if(err){           
            console.error(err)
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"))
            res.end()
            return
        } else {
            res.status(200).json(errorHandling(result, null))
            res.end()
        }
    })
}
    

// CREATE NEW ROW/ DATA ENTRY (LOCAL)

const insertTransactionDataLocal = async (req: Request, res: Response) => {
    try {
        const body = req.body
            const dbLocalUser = await DBLocal.promise().query(`
            SELECT 
                u.id,
                u.name,
                u.address,
                SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as balance
            FROM 
                week9.user as u
            LEFT JOIN
                week9.transaction as t
                ON u.id = t.user_id
            GROUP BY
                u.id`)

            if (Object.keys(dbLocalUser).length !== 0)  {
                res.status(200).json(errorHandling(dbLocalUser, null));
            } else {
                res.status(404).json(errorHandling(null, "User not found"));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
        }
    };

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