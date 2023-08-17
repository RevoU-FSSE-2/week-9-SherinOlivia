import express, { Express } from 'express';
import 'dotenv/config';
import { DB, DBLocal } from './config/dbconnection';
import router from './router/mainrouter';
import bodyParser from "body-parser";

const app: Express = express();
const port = process.env.PORT

DB.connect( function () {
    if (DB) {
        console.log("Railway Connection Connected");
    } else {
        console.log("Railway Connection Failed");
    }
}),

DBLocal.connect( function () {
    if (DBLocal) {
        console.log("Localhost Connection Connected");
    } else {
        console.log("Localhost Connection Failed");
    }
})

app.use(bodyParser.json());
app.use(router)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});