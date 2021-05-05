import { UserDatabase } from "../Data/UserDatabase";
import { InputUserMedic, InputUserPatient, UserMedicComplete, UserPatientComplete } from "../Entities/User";
import { InvalidInputError } from "../Error/InvalidInputError";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: TokenManager
    ) { }

    async createUserMedic(user: InputUserMedic) {

        if (!user.login || !user.password || !user.fk_especialidade) {
            throw new InvalidInputError("Please insert all information")
        }
        const id = this.idGenerator.generateId()
        const hashPassword = await this.hashManager.hash(user.password)

        const input: UserMedicComplete = {
            id,
            login: user.login,
            password: hashPassword,
            fk_especialidade: user.fk_especialidade
        }

        await this.userDatabase.createUserMedic(input)

        const accessToken: String = this.authenticator.generateToken({
            id,
            login: user.login,
            fk_especialidade: user.fk_especialidade

        })

        return accessToken
    }

    async createUserPatient(user: InputUserPatient){
        if(!user.login || !user.password){
            throw new InvalidInputError("Please insert all information")
        }

        const id = this.idGenerator.generateId()
        const hashPassword = await this.hashManager.hash(user.password)
        
        const input: UserPatientComplete = {
            id,
            login: user.login,
            password: hashPassword,            
        }

        await this.userDatabase.createUserPatient(input)

        const accessToken: String = this.authenticator.generateToken({
            id,
            login: user.login, 
        })

        return accessToken

    }
}