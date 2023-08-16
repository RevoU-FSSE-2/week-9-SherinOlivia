"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("./config/dbconnection");
const router = express_1.default.Router();
dbconnection_1.DB.connect(function (err) {
    if (err) {
        res.status(400).send(err);
    }
    else
        ;
});
// export const getAllTransactionData = (req: Request, res: Response) => {
//     res.status(200).json({
//       message: "Successfully 'get' all Transaction Data",
//       transactions,
//     })
//   }
