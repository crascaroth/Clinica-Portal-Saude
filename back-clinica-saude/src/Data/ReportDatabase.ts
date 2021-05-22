import { InputReportComplete, InputReportModelComplete, InputReportRelationComplete } from "../Entities/Report";
import { BaseDatabase } from "./BaseDatabase";

export class ReportDatabase extends BaseDatabase {
    public async createReport(report: InputReportComplete) {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.ReportTable} (
                id,
                fk_medico,
                fk_paciente,
                data,
                atualizacao,
                descricao
            )
            VALUES (
                "${report.id}",
                "${report.fk_medico}",
                "${report.fk_paciente}",
                "${report.data}",
                "${report.atualizacao}",
                "${report.descricao}"
            );
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async createReportModel(reportModel: InputReportModelComplete){
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.ReportModelTable} (id, fk_especialidade, nome)
            VALUES ("${reportModel.id}", "${reportModel.fk_especialidade}", "${reportModel.nome}");
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
        
    }

    public async createReportRelation(reportRelation: InputReportRelationComplete){
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.ReportRelationTable} (fk_laudo, fk_modelo)
            VALUES("${reportRelation.fk_laudo}","${reportRelation.fk_modelo}");            
            `)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllReports(): Promise<object[]>{
        try {

            const result = await this.getConnection().raw(`
            SELECT ${this.tableNames.ReportTable}.data, ${this.tableNames.ReportTable}.atualizacao, ${this.tableNames.ReportTable}.descricao, ${this.tableNames.UserPatientTable}.login, ${this.tableNames.UserMedicTable}.login, ${this.tableNames.SpecialtyTable}.especialidade,${this.tableNames.ReportModelTable}.nome
            FROM ${this.tableNames.ReportTable}
            JOIN ${this.tableNames.UserPatientTable} ON ${this.tableNames.ReportTable}.fk_paciente = ${this.tableNames.UserPatientTable}.id
            JOIN ${this.tableNames.UserMedicTable} ON ${this.tableNames.ReportTable}.fk_medico = ${this.tableNames.UserMedicTable}.id
            JOIN ${this.tableNames.ReportRelationTable} ON ${this.tableNames.ReportRelationTable}.fk_laudo = ${this.tableNames.ReportTable}.id
            JOIN ${this.tableNames.ReportModelTable} ON ${this.tableNames.ReportRelationTable}.fk_modelo = ${this.tableNames.ReportModelTable}.id
            JOIN ${this.tableNames.SpecialtyTable} ON ${this.tableNames.ReportModelTable}.fk_especialidade = ${this.tableNames.SpecialtyTable}.id;
            `)

            return result[0]
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}
