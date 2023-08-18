import mysql from 'mysql2';
import { DBConfig, DBConfigLocal } from './dbconfig';
import 'dotenv/config';


export const DB = mysql.createConnection(`process.env.SQL_URL`)


// local
export const DBLocal = mysql.createConnection({
    host: DBConfigLocal.HOST,
    user: DBConfigLocal.USER,
    password: DBConfigLocal.PASSWORD,
    database: DBConfigLocal.DATABASE,
})
