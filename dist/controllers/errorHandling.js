"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.errorHandling = void 0;
const dbconnection_1 = require("../config/dbconnection");
// import { redisCon } from '../config/redisconnection';
// Error Handling
const errorHandling = function (data, error) {
    if (error) {
        return {
            success: false,
            error: error
        };
    }
    return {
        success: true,
        data: data[0]
    };
};
exports.errorHandling = errorHandling;
const query = (query, values) => {
    return new Promise((resolve, reject) => {
        dbconnection_1.DBLocal.query(query, values, (err, result, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.query = query;
