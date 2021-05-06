import { Request, Response } from "express";
import { UserBusiness } from "../Business/userBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { UserDatabase } from "../Data/UserDatabase";
import { InputUserMedic, InputUserPatient, InputUserSpecialty } from "../Entities/User";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class UserController {

    async signupMedic(req: Request, res: Response) {
        try {
            const input: InputUserMedic = {
                login: req.body.login,
                password: req.body.password,
                fk_especialidade: req.body.especialidade,
            }

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            );

            const token = await userBusiness.createUserMedic(input)

            res.status(200).send({ token })

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();

    }

    async signupPatient(req: Request, res: Response) {
        try {
            const input: InputUserPatient = {
                login: req.body.login,
                password: req.body.password,
            }

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            )

            const token = await userBusiness.createUserPatient(input)

            res.status(200).send({ token })

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async signupSpecialty(req: Request, res: Response) {
        try {
            const input: InputUserSpecialty = {
                specialty: req.body.specialty
            }

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            )

            await userBusiness.createUserSpecialty(input)

            res.status(200).send("Specialty Inserted!")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();

    }

}
