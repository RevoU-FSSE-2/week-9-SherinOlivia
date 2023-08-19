"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = require("../config/dbconnection");
// import { RowDataPacket } from 'mysql2';
// import { redisCon } from '../config/redisconnection';
const errorHandling_1 = require("./errorHandling");
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
const getAllTransactionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbTrans = yield dbconnection_1.DB.promise().query(` SELECT * FROM railway.transaction`);
        if (Object.keys(dbTrans).length !== 0) {
            res.status(200).json((0, errorHandling_1.errorHandling)(dbTrans[0], null));
        }
        else {
            res.status(404).json((0, errorHandling_1.errorHandling)(null, "Data not found"));
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
// TRANSACTION DATA BY TRANSACTION ID
const getTransactionData = (req, res) => {
    dbconnection_1.DB.query(`SELECT * FROM railway.transaction WHERE id= ${req.params.id}`, function (err, result, fields) {
        if (err) {
            console.error(err);
            res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
            res.end();
            return;
        }
        else {
            res.status(200).json((0, errorHandling_1.errorHandling)(result, null));
            res.end();
        }
    });
};
// CREATE NEW ROW/ DATA ENTRY
const insertTransactionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, amount, user_id } = req.body;
        const dbTrans = yield dbconnection_1.DB.promise().query(`
        INSERT INTO transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `);
        res.status(200).json((0, errorHandling_1.errorHandling)({ id: dbTrans[0].insertId }, null));
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
// UPDATE WHOLE TRANSACTION DATA BY ID
const updateTransactionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { type, amount, user_id } = req.body;
        const dbTrans = yield dbconnection_1.DB.promise().query(`
        UPDATE transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `, id);
        res.status(200).json((0, errorHandling_1.errorHandling)({ id: id }, null));
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
// DELETE TRANSACTION DATA
const deleteTransactionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const dbTrans = yield dbconnection_1.DB.promise().query(`
        DELETE FROM transaction WHERE id = ?`, id);
        res.status(200).json((0, errorHandling_1.errorHandling)({ id: id }, null));
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
const TransactionDataController = {
    getAllTransactionData,
    getTransactionData,
    insertTransactionData,
    updateTransactionData,
    deleteTransactionData
};
exports.default = TransactionDataController;
