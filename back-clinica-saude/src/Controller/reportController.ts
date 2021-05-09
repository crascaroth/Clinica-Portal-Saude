import { Response, Request } from "express"
import { ReportBusiness } from "../Business/reportBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { ReportDatabase } from "../Data/ReportDatabase";
import { InputReport } from "../Entities/Report";
import { IdGenerator } from "../Services/IdGenerator";

export class ReportController {
    async createReport(req: Request, res: Response) {
        try {
            const input: InputReport = {
                fk_medico: req.body.fk_medico,
                fk_paciente: req.body.fk_paciente,
                data: req.body.data,
                atualizacao: req.body.atualizacao,
                descricao: req.body.descricao
            }

            const reportBusiness = new ReportBusiness(
                new ReportDatabase,
                new IdGenerator,
            )

            await reportBusiness.createReport(input)
            
            res.status(201).send("Report Created Sucessfully!")

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

}