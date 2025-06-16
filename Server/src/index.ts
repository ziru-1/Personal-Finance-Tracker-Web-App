import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records';

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.DB_URL!;

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB"))
    .catch((err)=>console.error("Failed to connect to MongoDB", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})