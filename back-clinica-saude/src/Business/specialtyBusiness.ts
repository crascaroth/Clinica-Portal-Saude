import { SpecialtyDatabase } from "../Data/SpecialtyDatabase"
import { InputSpecialty, SpecialtyComplete } from "../Entities/Specialty"
import { InvalidInputError } from "../Error/InvalidInputError"
import { IdGenerator } from "../Services/IdGenerator"



export class SpecialtyBusiness {
    constructor(
        private specialtyDatabase: SpecialtyDatabase,
        private idGenerator: IdGenerator
    ) { }


    async createSpecialty(user: InputSpecialty) {
        if (!user.specialty) {
            throw new InvalidInputError("Please insert the specialty")
        }

        const id = this.idGenerator.generateId()
        const input: SpecialtyComplete = {
            id,
            specialty: user.specialty
        }

        await this.specialtyDatabase.createSpecialty(input)

    }

    async getAllSpecialties(): Promise<object[]>{
        try {
            return await this.specialtyDatabase.getAllSpecialties()
        } catch (error) {
            throw new Error(error.message)
        }        

    }

}