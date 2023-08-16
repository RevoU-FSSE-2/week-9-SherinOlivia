// import { Request, Response } from "express";
// import mysql from 'mysql2';
// import 'dotenv/config';


// // const getAllUserData = (req: Request, res: Response) => {
//     const con = mysql.createConnection({
//         host: process.env.SQL_HOST,
//         user: process.env.SQL_USERNAME,
//         password: process.env.SQL_PASSWORD,
//         database: process.env.SQL_DATABASE,
//     })
// // }
//     // Created the Database named as "Week9"
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
    
//         con.query("CREATE DATABASE Week9",
//             function (err, result) {
//                 if (err) throw err;
//                 console.log("Database created");
//             });
//     });