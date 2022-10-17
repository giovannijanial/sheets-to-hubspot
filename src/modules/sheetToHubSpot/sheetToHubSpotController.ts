import { Request, Response } from "express";
import { SheetToHubSpotUseCase } from "./sheetToHubSpotUseCase";

class SheetToHubSpotController {
	async handle(req: Request, res: Response) {
		const file = req.file as Express.Multer.File;

		const sheetToHubSpotUseCase = new SheetToHubSpotUseCase();
		const result = await sheetToHubSpotUseCase.execute(file);

		return res.send(result);
	}
}

export { SheetToHubSpotController };
