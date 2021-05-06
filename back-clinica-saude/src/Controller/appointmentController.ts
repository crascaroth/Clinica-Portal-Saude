import { Request, Response } from "express";
import { BaseDatabase } from "../Data/BaseDatabase";
import { InputAppointment } from "../Entities/Appointment";

export class AppointmentController {
    async createAppointment(req: Request, res: Response) {
        try {
            const input: InputAppointment = {
                fk_paciente: req.body.fk_paciente,
                fk_medico: req.body.fk_medico,
                pagamento_total: req.body.pagamento_total,
                data: req.body.data,
                retorno: req.body.retorno
            }

            

        } catch (error) {

        }

        await BaseDatabase.destroyConnection();

    }

}
