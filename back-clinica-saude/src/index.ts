import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./Routes/userRouter"


dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user", userRouter);
