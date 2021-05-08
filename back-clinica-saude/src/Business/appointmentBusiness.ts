import { AppointmentDatabase } from "../Data/AppointmentDatabase";
import { InputAppointment, InputAppointmentComplete } from "../Entities/Appointment";
import { InvalidInputError } from "../Error/InvalidInputError";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class AppointmentBusiness {
    constructor(
        private appointmentDatabase: AppointmentDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: TokenManager
    ) { }

    async createAppointment(appointment: InputAppointment) {
        if (
            !appointment.fk_paciente ||
            !appointment.fk_medico ||
            !appointment.pagamento_total ||
            !appointment.data ||
            !appointment.retorno
        ) {
            throw new InvalidInputError("Please insert all information")
        }

        const id = this.idGenerator.generateId()

        const input: InputAppointmentComplete = {
            id,
            fk_paciente: appointment.fk_paciente, 
            fk_medico: appointment.fk_medico ,
            pagamento_total: appointment.pagamento_total, 
            data: appointment.data ,
            retorno: appointment.retorno
        }

        await this.appointmentDatabase.createAppointment(input)
        
    }

}

// fk_paciente: req.body.fk_paciente,
// fk_medico: req.body.fk_medico,
// pagamento_total: req.body.pagamento_total,
// data: req.body.data,
// retorno: req.body.retorno