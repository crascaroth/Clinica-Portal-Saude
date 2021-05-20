import { Request, Response } from "express";
import { SpecialtyBusiness } from "../Business/specialtyBusiness";
import {  } from "../Business/userBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { SpecialtyDatabase } from "../Data/SpecialtyDatabase";
import { InputSpecialty } from "../Entities/Specialty";
import { IdGenerator } from "../Services/IdGenerator";

export class SpecialtyController {

    async signupSpecialty(req: Request, res: Response) {
        try {
            const input: InputSpecialty = {
                specialty: req.body.specialty
            }

            const specialtyBusiness = new SpecialtyBusiness(
                new SpecialtyDatabase,
                new IdGenerator
            )

            await specialtyBusiness.createSpecialty(input)

            res.status(200).send("Specialty Inserted!")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();

    }

    async getAllSpecialties(req: Request, res: Response){
        try {
            
            const specialtyBusiness = new SpecialtyBusiness(
                new SpecialtyDatabase,
                new IdGenerator
            )

            const result = await specialtyBusiness.getAllSpecialties()

            res.status(200).send({Specialties: result})

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();

    }


}