import express, { Request, Response } from 'express';
import transactionrouter from './TransactionDataRoute'
const router = express.Router();

// main app/page route
router.get("/", function (req: Request, res: Response) {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 9"
    })
})


router.use('/transaction', transactionrouter)



export default router;