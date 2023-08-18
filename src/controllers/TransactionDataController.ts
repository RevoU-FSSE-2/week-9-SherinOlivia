import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
import { RowDataPacket } from 'mysql2';
// import { redisCon } from '../config/redisconnection';
import { errorHandling, query } from './errorHandling';



// ALL TRANSACTION DATA
const getAllTransactionData = async (req: Request, res: Response) => {
    try {
        const dbTrans = (await DB.promise().query(`
            SELECT * FROM week9.transaction`))[0] as RowDataPacket[];

        if (dbTrans.length !== 0) {
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