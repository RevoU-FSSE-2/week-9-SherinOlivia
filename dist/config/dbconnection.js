"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const con = mysql2_1.default.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE railway", function (err, result) {
        if (err)
            throw err;
        console.log("Database railway created");
    });
});
