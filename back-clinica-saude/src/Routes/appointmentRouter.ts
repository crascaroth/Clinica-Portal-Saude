import express from "express";
import { AppointmentController } from "../Controller/appointmentController";


export const appointmentRouter = express.Router();

const appointmentController = new AppointmentController();

appointmentRouter.post("/create", appointmentController.createAppointment)