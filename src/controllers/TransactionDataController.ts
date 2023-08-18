import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
// import { RowDataPacket } from 'mysql2';
// import { redisCon } from '../config/redisconnection';
import { errorHandling, query } from './errorHandling';



// ALL TRANSACTION DATA
const getAllTransactionData = async (req: Request, res: Response) => {
    try {
        const dbTrans = await DB.promise().query("select * from railway.transaction");

        if (Object.keys(dbTrans).length !== 0) {
            res.status(200).json(errorHandling(dbTrans, null));
        } else {
            res.status(404).json(errorHandling(null, "Data not found"));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't Retrieve Data"));
    }
};


// // TRANSACTION DATA BY ID
const getTransactionData = (req: Request, res: Response) => {
    DB.query(`select * from railway.transaction where user_id= ${req.params.id}`, function(err, result, fields){
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
const getAllTransactionDataLocal = async (req: Request, res: Response) => {
    try {
        const dbLocalTrans: any[]= await DBLocal.promise().query(`
        SELECT * FROM week9.transaction`)

        if (Object.keys(dbLocalTrans).length !== 0)  {
            res.status(200).json(errorHandling(dbLocalTrans[0], null));
        } else {
            res.status(404).json(errorHandling(null, "Data not found"));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};

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
        const { type, amount, user_id } =  req.body;
        const dbLocalTrans: any[] = await DBLocal.promise().query(`
        INSERT INTO transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `);

        res.status(200).json(errorHandling({ id: dbLocalTrans[0].insertId } as { id: number }, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


// UPDATE WHOLE TRANSACTION DATA BY ID (LOCAL)

const updateTransactionDataLocal = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const { type, amount, user_id } =  req.body;
        const dbLocalTrans: any[] = await DBLocal.promise().query(`
        UPDATE transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `, id);

        res.status(200).json(errorHandling({ id: id}, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


// DELETE TRANSACTION DATA (LOCAL)

const deleteTransactionDataLocal = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const dbLocalTrans: any[] = await DBLocal.promise().query(`
        DELETE FROM transaction WHERE id = ?`, id);

        res.status(200).json(errorHandling({ id: id}, null));
    } catch (error) {
        console.error(error);
        res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
    }
};


const TransactionDataController = { 
    getAllTransactionData, 
    getAllTransactionDataLocal, 
    getTransactionData, 
    getTransactionDataLocal, 
    insertTransactionDataLocal, 
    updateTransactionDataLocal, 
    deleteTransactionDataLocal }
export default TransactionDataController