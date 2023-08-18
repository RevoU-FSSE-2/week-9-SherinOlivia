"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TransactionDataRoute_1 = __importDefault(require("./TransactionDataRoute"));
const UserDataRoute_1 = __importDefault(require("./UserDataRoute"));
const router = express_1.default.Router();
// main app/page route
router.get("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 9"
    });
});
router.use('/transaction', TransactionDataRoute_1.default);
router.use('/user', UserDataRoute_1.default);
exports.default = router;
