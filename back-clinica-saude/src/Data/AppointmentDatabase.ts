
import { InputAppointmentComplete, InputAppointmentRelationComplete, InputAppointmentTypeComplete } from "../Entities/Appointment";
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


    public async createAppointmentType(appointmentType: InputAppointmentTypeComplete) {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.AppointmentTypeTable}( id, nome, preco)
            VALUES ( "${appointmentType.id}", "${appointmentType.nome}", "${appointmentType.preco}");
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async createAppointmentRelation(appointment_relation: InputAppointmentRelationComplete) {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.AppointmentRelationTable}(fk_agendamento, fk_tipo_de_agendamento)
            VALUES ("${appointment_relation.fk_agendamento}", "${appointment_relation.fk_tipo_de_agendamento}");
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    // this.tableNames.user


    public async getAllAppointments(): Promise<object[]> {
        try {
            let result: object[]
            result = await this.getConnection().raw(`
                SELECT
                ${this.tableNames.UserPatientTable}.login,
                ${this.tableNames.UserMedicTable}.login,
                ${this.tableNames.AppointmentTable}.pagamento_total,
                ${this.tableNames.AppointmentTable}.data,
                ${this.tableNames.AppointmentTable}.retorno,
                ${this.tableNames.SpecialtyTable}.especialidade,
                ${this.tableNames.AppointmentTypeTable}.nome,
                ${this.tableNames.AppointmentTypeTable}.preco

                FROM ${this.tableNames.AppointmentTable}

                JOIN ${this.tableNames.UserPatientTable} ON ${this.tableNames.AppointmentTable}.fk_paciente = ${this.tableNames.UserPatientTable}.id
                JOIN ${this.tableNames.UserMedicTable} ON ${this.tableNames.AppointmentTable}.fk_medico = ${this.tableNames.UserMedicTable}.id
                JOIN ${this.tableNames.SpecialtyTable} ON ${this.tableNames.UserMedicTable}.fk_especialidade = ${this.tableNames.SpecialtyTable}.id
                JOIN ${this.tableNames.AppointmentRelationTable} ON ${this.tableNames.AppointmentRelationTable}.fk_agendamento = agendamento.id
                JOIN ${this.tableNames.AppointmentTypeTable} ON ${this.tableNames.AppointmentRelationTable}.fk_tipo_de_agendamento = ${this.tableNames.AppointmentTypeTable}.id;
            `)
            // console.log('RESULT', result[0])
            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}