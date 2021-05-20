import { userDatabaseInfo, UserMedicComplete, UserPatientComplete } from "../Entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async createUserMedic(user: UserMedicComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.UserMedicTable} (id, login, password, fk_especialidade)
            VALUES ("${user.id}","${user.login}","${user.password}","${user.fk_especialidade}");
            `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async createUserPatient(user: UserPatientComplete): Promise<void> {
        try {

            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.UserPatientTable}(id, login, password)
            VALUES ("${user.id}","${user.login}","${user.password}"); 
            `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }


    public async getPatientInfo(login: string): Promise<userDatabaseInfo> {
        try {
            const result = await this.getConnection().raw(`
            SELECT id, login, password
            FROM ${this.tableNames.UserPatientTable}
            WHERE ( login = "${login}" )
            `)
            console.log(result[0])
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getMedicInfo(login: string): Promise<userDatabaseInfo> {
        try {
            const result = await this.getConnection().raw(`
            SELECT id, login, password
            FROM ${this.tableNames.UserMedicTable}
            WHERE ( login = "${login}" )
            `)
            console.log(result[0])
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public async getAllMedics(): Promise<object[]> {
        try {
            const result = await this.getConnection().raw(`
            SELECT login, especialidade
            FROM ${this.tableNames.UserMedicTable}
            JOIN ${this.tableNames.SpecialtyTable}
	        ON ${this.tableNames.UserMedicTable}.fk_especialidade = ${this.tableNames.SpecialtyTable}.id;
            `)
            // console.log(result[0])
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllPatients(): Promise<object[]>{
        try {
            const result = await this.getConnection().raw(`
            SELECT login
            FROM ${this.tableNames.UserPatientTable};
            `)
            // console.log(result[0])
            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}