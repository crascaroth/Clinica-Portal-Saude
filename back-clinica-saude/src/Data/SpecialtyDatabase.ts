import { SpecialtyComplete } from "../Entities/Specialty";
import { BaseDatabase } from "./BaseDatabase";

export class SpecialtyDatabase extends BaseDatabase {

    public async createSpecialty(user: SpecialtyComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.SpecialtyTable} (id, especialidade)
            VALUES ("${user.id}", "${user.specialty}");
            `)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllSpecialties(): Promise<object[]>{
        try {
            const result = await this.getConnection().raw(`
            SELECT especialidade
            FROM ${this.tableNames.SpecialtyTable};
            `)
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}