"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConfigLocal = exports.DBConfig = void 0;
exports.DBConfig = {
    HOST: process.env.SQL_HOST,
    USER: process.env.SQL_USERNAME,
    PASSWORD: process.env.SQL_PASSWORD,
    DATABASE: process.env.SQL_DATABASE,
    PORT: process.env.SQL_PORT
};
// local
exports.DBConfigLocal = {
    HOST: process.env.SQL_HOSTLOCAL,
    USER: process.env.SQL_USERNAMELOCAL,
    PASSWORD: process.env.SQL_PASSWORDLOCAL,
    DATABASE: process.env.SQL_DATABASELOCAL,
};
