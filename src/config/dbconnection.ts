import mysql from 'mysql2';
import { DBConfig } from './dbconfig';

const con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE railway",
        function (err, result) {
            if (err) throw err;
            console.log("Database railway created");
        });
});