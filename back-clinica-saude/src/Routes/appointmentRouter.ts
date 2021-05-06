import express from "express";
import { AppointmentController } from "../Controller/AppointmentController";

export const appointmentRouter = express.Router()

const appointmentController = new AppointmentController()


appointmentRouter.post("/appointment/create", appointmentController.createAppointment)
