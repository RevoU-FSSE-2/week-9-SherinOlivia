import express, { Request, Response } from 'express';
import { DB } from '../config/dbconnection';
// import redisCon from "../config/redisconnection";
import { errorHandling, query } from './errorHandling';

const getUserData = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        // const userKey = "user:" + id
        // const redisCacheData = await redisCon.hgetall(userKey)

        // if (Object.keys(redisCacheData).length !== 0) {
        //     console.log("Data From Cache Retrieved!")
        //     res.status(200).json(errorHandling(redisCacheData, null))
        //     res.end()
        // } else {
            const dbUser: any[] = await DB.promise().query(`
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
                u.id`, id)

            // await redisCon.hset(userKey, dbUser)
            // await redisCon.expire(userKey, 50);
            if (Object.keys(dbUser).length !== 0)  {
                res.status(200).json(errorHandling(dbUser[0][0], null));
            } else {
                res.status(404).json(errorHandling(null, "User not found"));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
        }
    };

// Get All User Data

const getAllUserData = async (req: Request, res: Response) => {
    try {
            const dbUser = await DB.promise().query(`
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
                u.id`)

            if (Object.keys(dbUser).length !== 0)  {
                res.status(200).json(errorHandling(dbUser[0], null));
            } else {
                res.status(404).json(errorHandling(null, "User not found"));
            }
        } catch (error) {
            console.error(error);
            res.status(500).json(errorHandling(null, "Connection error!! Can't retrieve Data"));
        }
    };

const UserDataController = { getUserData, getAllUserData }
export default UserDataController