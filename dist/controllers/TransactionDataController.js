"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("../config/dbconnection");
const router = express_1.default.Router();
// import redis from 'ioredis';
// const redisCon = new redis(
// host: 'localhost'
// port: 6379
// )
// ALL TRANSACTION DATA
const getAllTransactionData = (req, res) => {
    dbconnection_1.DB.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            dbconnection_1.DB.query("SELECT * FROM transaction", function (err, result, fields) {
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
// TRANSACTION DATA BY ID
const getTransactionData = (req, res) => {
    dbconnection_1.DB.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            dbconnection_1.DB.query("SELECT id FROM transaction", function (err, result, fields) {
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
// ================================LOCAL======================================
// ALL TRANSACTION DATA (LOCAL)
const getAllTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            dbconnection_1.DBLocal.query("SELECT * FROM transaction", function (err, result, fields) {
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
// TRANSACTION DATA BY USER_ID (LOCAL)
const getTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            dbconnection_1.DBLocal.query(`SELECT * FROM transaction WHERE user_id= ${req.params.id}`, function (err, result, fields) {
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
// CREATE NEW ROW/ DATA ENTRY (LOCAL)
const insertTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            const { type, amount, user_id } = req.body;
            dbconnection_1.DBLocal.query(`INSERT INTO transaction SET user_id=${user_id}, \`type\`='${type}', amount=${amount}`, function (err, result, fields) {
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
