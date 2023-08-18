import express, { Request, Response } from 'express';
import { DB, DBLocal } from '../config/dbconnection';
// import redisCon from "../config/redisconnection";
import { errorHandling, query } from './errorHandling';
import { RowDataPacket } from 'mysql2';

const getUserDataLocal = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        // const userKey = "user:" + id
        // const redisCacheData = await redisCon.hgetall(userKey)

        // if (Object.keys(redisCacheData).length !== 0) {
        //     console.log("Data From Cache Retrieved!")
        //     res.status(200).json(errorHandling(redisCacheData, null))
        //     res.end()
        // } else {
            const dbLocalUser = await DBLocal.promise().query(`
            SELECT 
                u.id,
                u.name,
                u.address,
                SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as balance,
                SUM(CASE WHEN t.type = 'expense' THEN t.amount ELSE 0 END) as expense
            FROM 
                week9.user as u
            LEFT JOIN
                week9.transaction as t
                ON u.id = t.user_id
            WHERE
                u.id = ?
            GROUP BY
                u.id`, id)

            // await redisCon.hset(userKey, dbLocalUser)
            // await redisCon.expire(userKey, 50);
            if (Object.keys(dbLocalUser).length !== 0)  {
                res.status(200).json(errorHandling(dbLocalUser[0], null));
            } else {
                res.status(404).json(errorHandling(null, "User not found"));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
        }
    };

// Get All User Data

const getAllUserDataLocal = async (req: Request, res: Response) => {
    try {
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

const UserDataController = { getUserDataLocal, getAllUserDataLocal }
export default UserDataController