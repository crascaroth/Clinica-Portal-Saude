import { InputAppointmentComplete } from "../Entities/Appointment";
import { BaseDatabase } from "./BaseDatabase";

export class AppointmentDatabase extends BaseDatabase {
    public async createAppointment(appointment: InputAppointmentComplete) {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.AppointmentTable} (
                id,
                fk_paciente,
                fk_medico,
                pagamento_total,
                data,
                retorno
                )
            VALUES (
                "${appointment.id}",
                "${appointment.fk_paciente}",
                "${appointment.fk_medico}",
                "${appointment.pagamento_total}",
                "${appointment.data}",
                "${appointment.retorno}"
            );
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}