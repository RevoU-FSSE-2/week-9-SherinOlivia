"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBLocal = exports.DB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbconfig_1 = require("./dbconfig");
require("dotenv/config");
// railway
exports.DB = mysql2_1.default.createConnection({
    host: dbconfig_1.DBConfig.HOST,
    user: dbconfig_1.DBConfig.USER,
    password: dbconfig_1.DBConfig.PASSWORD,
    database: dbconfig_1.DBConfig.DATABASE,
    port: +dbconfig_1.DBConfig.PORT
});
// local
exports.DBLocal = mysql2_1.default.createConnection({
    host: dbconfig_1.DBConfigLocal.HOST,
    user: dbconfig_1.DBConfigLocal.USER,
    password: dbconfig_1.DBConfigLocal.PASSWORD,
    database: dbconfig_1.DBConfigLocal.DATABASE,
});
