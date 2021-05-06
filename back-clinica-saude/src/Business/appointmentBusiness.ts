import { Request, Response } from "express";
import { AppointmentDatabase } from "../Data/AppointmentDatabase";
import { BaseDatabase } from "../Data/BaseDatabase";
import { UserDatabase } from "../Data/UserDatabase";
import { InputAppointmentComplete, InputAppointment } from "../Entities/Appointment";
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

        if(
            !appointment.fk_paciente ||
            !appointment.fk_medico ||
            !appointment.pagamento_total ||
            !appointment.data ||
            !appointment.retorno
            ){ throw new InvalidInputError("Please insert all information") }


        const id = this.idGenerator.generateId()

        const appointmentComplete: InputAppointmentComplete = {
            id,
            fk_paciente: appointment.fk_paciente,
            fk_medico: appointment.fk_medico,
            pagamento_total: appointment.pagamento_total,
            data: appointment.data,
            retorno: appointment.retorno
        }
        
        await this.appointmentDatabase.createAppointment(appointmentComplete)

        

    }

}
