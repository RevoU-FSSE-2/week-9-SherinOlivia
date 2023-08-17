import mysql from 'mysql2';
import { DBConfig, DBConfigLocal } from './dbconfig';
import 'dotenv/config';

export const DB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DATABASE,
})


// local
export const DBLocal = mysql.createConnection({
    host: DBConfigLocal.HOST,
    user: DBConfigLocal.USER,
    password: DBConfigLocal.PASSWORD,
    database: DBConfigLocal.DATABASE,
})

