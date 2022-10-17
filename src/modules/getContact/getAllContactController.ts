import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { AppError } from "../../utils/errors/AppError";
import { GetAllContactUseCase } from "./getAllContactUseCase";

class GetAllContactController {
	async handle(req: Request, res: Response) {
		const getContactUseCase = new GetAllContactUseCase();

		const data = await getContactUseCase.execute();

		return res.send({ data });
	}
}

export { GetAllContactController };
