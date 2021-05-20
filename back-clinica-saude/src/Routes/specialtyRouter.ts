import express from "express";
import { SpecialtyController } from "../Controller/specialtyController";


export const specialtyRouter = express.Router();

const specialtyController = new SpecialtyController();

specialtyRouter.post("/signup", specialtyController.signupSpecialty)
specialtyRouter.get("/getAll", specialtyController.getAllSpecialties)