"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userrouter = express_1.default.Router();
const UserDataController_1 = __importDefault(require("../controllers/UserDataController"));
// get all user data
userrouter.get('/', UserDataController_1.default.getAllUserDataLocal);
// get user data per id
userrouter.get('/:id', UserDataController_1.default.getUserDataLocal);
exports.default = userrouter;
