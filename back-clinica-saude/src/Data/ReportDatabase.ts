import { InputReportComplete } from "../Entities/Report";
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

}
