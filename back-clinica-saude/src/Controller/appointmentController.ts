import { Response, Request } from "express"
import { AppointmentBusiness } from "../Business/appointmentBusiness";
import { AppointmentDatabase } from "../Data/AppointmentDatabase";
import { BaseDatabase } from "../Data/BaseDatabase";
import { InputAppointment } from "../Entities/Appointment";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";


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

            const appointmentBusiness = new AppointmentBusiness(
                new AppointmentDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            );

            await appointmentBusiness.createAppointment(input)
            
            res.status(200).send("Appointment created Successfully!")


        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }


}