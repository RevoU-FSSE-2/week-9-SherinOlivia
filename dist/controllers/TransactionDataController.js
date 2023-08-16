"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("../config/dbconnection");
const router = express_1.default.Router();
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
// ALL TRANSACTION DATA (LOCAL)
const getAllTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
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
// TRANSACTION DATA BY ID (LOCAL)
const getTransactionDataLocal = (req, res) => {
    dbconnection_1.DBLocal.connect(function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            dbconnection_1.DBLocal.query(`SELECT * FROM transaction WHERE id= ${req.params.id}`, function (err, result, fields) {
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
const TransactionDataController = { getAllTransactionData, getAllTransactionDataLocal, getTransactionData, getTransactionDataLocal };
exports.default = TransactionDataController;
