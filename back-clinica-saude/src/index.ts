import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./Routes/userRouter"
import { appointmentRouter } from "./Routes/appointmentRouter"


dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
})

app.use("/user", userRouter);
app.use("/appointment", appointmentRouter)
