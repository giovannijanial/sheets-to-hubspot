import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { AppError } from "../../utils/errors/AppError";
import { CsvToHubSpotUseCase } from "./csvToHubSpotUseCase";

class CsvToHubSpotController {
	handle(req: Request, res: Response) {
		const csvToHubSpotUseCase = new CsvToHubSpotUseCase();
		const result = csvToHubSpotUseCase.execute();

		return res.send({ result });
	}
}

export { CsvToHubSpotController };
