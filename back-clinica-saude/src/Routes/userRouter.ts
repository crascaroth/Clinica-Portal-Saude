import express from "express";
import { UserController } from "../Controller/userController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup/medic", userController.signupMedic)
userRouter.post("/signup/patient", userController.signupPatient)
userRouter.put("/login", userController.login)

userRouter.get("/medic/getAll", userController.getAllMedics)
userRouter.get("/patient/getAll", userController.getAllPatients)
