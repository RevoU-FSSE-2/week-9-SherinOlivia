"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const dbconnection_1 = require("./config/dbconnection");
const mainrouter_1 = __importDefault(require("./router/mainrouter"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT;
console.log(port);
dbconnection_1.DB.connect(function () {
    if (dbconnection_1.DB) {
        console.log("Railway Connection Connected");
    }
    else {
        console.log("Railway Connection Failed");
    }
}),
    dbconnection_1.DBLocal.connect(function () {
        if (dbconnection_1.DBLocal) {
            console.log("Localhost Connection Connected");
        }
        else {
            console.log("Localhost Connection Failed");
        }
    });
app.use(body_parser_1.default.json());
app.use(mainrouter_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
