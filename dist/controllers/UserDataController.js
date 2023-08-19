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
// import redisCon from "../config/redisconnection";
const errorHandling_1 = require("./errorHandling");
const getUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        // const userKey = "user:" + id
        // const redisCacheData = await redisCon.hgetall(userKey)
        // if (Object.keys(redisCacheData).length !== 0) {
        //     console.log("Data From Cache Retrieved!")
        //     res.status(200).json(errorHandling(redisCacheData, null))
        //     res.end()
        // } else {
        const dbUser = yield dbconnection_1.DB.promise().query(`
            SELECT 
                u.id,
                u.name,
                u.address,
                SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as balance,
                SUM(CASE WHEN t.type = 'expense' THEN t.amount ELSE 0 END) as expense
            FROM 
                railway.user as u
            LEFT JOIN
                railway.transaction as t
                ON u.id = t.user_id
            WHERE
                u.id = ?
            GROUP BY
                u.id`, id);
        // await redisCon.hset(userKey, dbUser)
        // await redisCon.expire(userKey, 50);
        if (Object.keys(dbUser).length !== 0) {
            res.status(200).json((0, errorHandling_1.errorHandling)(dbUser[0][0], null));
        }
        else {
            res.status(404).json((0, errorHandling_1.errorHandling)(null, "User not found"));
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
// Get All User Data
const getAllUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUser = yield dbconnection_1.DB.promise().query(`
            SELECT 
                u.id,
                u.name,
                u.address,
                SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as balance
            FROM 
                railway.user as u
            LEFT JOIN
                railway.transaction as t
                ON u.id = t.user_id
            GROUP BY
                u.id`);
        if (Object.keys(dbUser).length !== 0) {
            res.status(200).json((0, errorHandling_1.errorHandling)(dbUser[0], null));
        }
        else {
            res.status(404).json((0, errorHandling_1.errorHandling)(null, "User not found"));
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json((0, errorHandling_1.errorHandling)(null, "Connection error!! Can't retrieve Data"));
    }
});
const UserDataController = { getUserData, getAllUserData };
exports.default = UserDataController;
