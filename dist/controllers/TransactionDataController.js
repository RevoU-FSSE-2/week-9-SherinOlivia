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
// import { redisCon } from '../config/redisconnection';
const errorHandling_1 = require("./errorHandling");
// ALL TRANSACTION DATA
const getAllTransactionData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbTrans = yield dbconnection_1.DB.promise().query("select * from railway.transaction");
        if (Object.keys(dbTrans).length !== 0) {
            res.status(200).json((0, errorHandling_1.errorHandling)(dbTrans, null));
        }
        else {
            res.status(404).json((0, errorHandling_1.errorHandling)(null, "Data not found"));
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't Retrieve Data"));
    }
});
// // TRANSACTION DATA BY ID
const getTransactionData = (req, res) => {
    dbconnection_1.DB.query(`select * from railway.transaction where user_id= ${req.params.id}`, function (err, result, fields) {
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
// ================================LOCAL======================================
// ALL TRANSACTION DATA (LOCAL)
const getAllTransactionDataLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbLocalTrans = yield dbconnection_1.DBLocal.promise().query(`
        SELECT * FROM week9.transaction`);
        if (Object.keys(dbLocalTrans).length !== 0) {
            res.status(200).json((0, errorHandling_1.errorHandling)(dbLocalTrans[0], null));
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
// TRANSACTION DATA BY USER_ID (LOCAL)
const getTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.query(`SELECT * FROM week9.transaction WHERE user_id= ${req.params.id}`, function (err, result, fields) {
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
// CREATE NEW ROW/ DATA ENTRY (LOCAL)
const insertTransactionDataLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, amount, user_id } = req.body;
        const dbLocalTrans = yield dbconnection_1.DBLocal.promise().query(`
        INSERT INTO transaction SET \`type\`='${type}', amount=${amount}, user_id=${user_id}
        `);
        res.status(200).json((0, errorHandling_1.errorHandling)({ id: dbLocalTrans[0].insertId }, null));
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
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
const deleteTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            const { type, amount, user_id } = req.body;
            dbconnection_1.DBLocal.query(``, function (err, result, fields) {
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    return res.status(200).send(result);
                }
            });
        }
    });
};
const TransactionDataController = { getAllTransactionData, getAllTransactionDataLocal, getTransactionData, getTransactionDataLocal, insertTransactionDataLocal };
exports.default = TransactionDataController;
