import express, { Request, Response } from 'express';
import { DB } from '../config/dbconnection';
// import { RowDataPacket } from 'mysql2';
// import { redisCon } from '../config/redisconnection';
import { errorHandling, query } from './errorHandling';


// railway
// ALL TRANSACTION DATA
// const getAllTransactionData = async (req: Request, res: Response) => {
//     try {
//         const [dbTrans] = await DB.promise().query("select * from railway.transaction");
//         console.log(dbTrans)
//         if (Object.keys(dbTrans).length !== 0) {
//             res.status(200).json(errorHandling(dbTrans, null));
//         } else {
//             res.status(404).json(errorHandling(null, "Data not found"));
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json(errorHandling(null, "Connection error!! Can't Retrieve Data"));
//     }
// };


// // // TRANSACTION DATA BY ID
// const getTransactionData = (req: Request, res: Response) => {
//     DB.query(`select * from railway.transaction where user_id= ${req.params.id}`, function(err, result, fields){
//         if(err){           
//             console.error(err)
//             res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"))
//             res.end()
//             return
//         } else {
//             res.status(200).json(errorHandling(result, null))
//             res.end()
//         }
//     })
// }

// ==========================================================================================


// ALL TRANSACTION DATA
const getAllTransactionData = async (req: Request, res: Response) => {
    try {
        const dbTrans: any[]= await DB.promise().query(` SELECT * FROM railway.transaction`)

        if (Object.keys(dbTrans).length !== 0)  {
            res.status(200).json(errorHandling(dbTrans[0], null));
        } else {
            res.status(404).json(errorHandling(null, "Data not found"));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};

// TRANSACTION DATA BY TRANSACTION ID
const getTransactionData = (req: Request, res: Response) => { 
    DB.query(`SELECT * FROM railway.transaction WHERE id= ${req.params.id}`, function(err, result, fields){
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
    

// CREATE NEW ROW/ DATA ENTRY
const insertTransactionData = async (req: Request, res: Response) => {
    try {
        const { type, amount, user_id } =  req.body;
        const dbTrans: any[] = await DB.promise().query(`
        INSERT INTO transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `);

        res.status(200).json(errorHandling({ id: dbTrans[0].insertId } as { id: number }, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


// UPDATE WHOLE TRANSACTION DATA BY ID

const updateTransactionData = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const { type, amount, user_id } =  req.body;
        const dbTrans: any[] = await DB.promise().query(`
        UPDATE transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `, id);

        res.status(200).json(errorHandling({ id: id}, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


// DELETE TRANSACTION DATA

const deleteTransactionData = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const dbTrans: any[] = await DB.promise().query(`
        DELETE FROM transaction WHERE id = ?`, id);

        res.status(200).json(errorHandling({ id: id}, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


const TransactionDataController = { 
    getAllTransactionData, 
    getTransactionData, 
    insertTransactionData, 
    updateTransactionData, 
    deleteTransactionData }
export default TransactionDataController