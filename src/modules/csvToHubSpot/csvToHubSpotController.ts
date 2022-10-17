import { Request, Response } from "express";
import { CsvToHubSpotUseCase } from "./csvToHubSpotUseCase";

class CsvToHubSpotController {
	async handle(req: Request, res: Response) {
		const file = req.file as Express.Multer.File;

		const csvToHubSpotUseCase = new CsvToHubSpotUseCase();
		const result = await csvToHubSpotUseCase.execute(file);

		return res.send(result);
	}
}

export { CsvToHubSpotController };
