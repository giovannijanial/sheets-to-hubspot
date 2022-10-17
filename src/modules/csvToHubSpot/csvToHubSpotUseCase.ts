import { Client } from "@hubspot/api-client";
import { SimplePublicObjectInput } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { read, utils } from "xlsx";

import { AppError } from "../../utils/errors/AppError";
console.log("AQUI", process.env.TOKEN);
const hubspotClient = new Client({
	accessToken: process.env.TOKEN,
});

class CsvToHubSpotUseCase {
	async execute(file: Express.Multer.File): Promise<SimplePublicObjectInput[]> {
		if (!file) {
			throw new AppError("No content!");
		}

		const { buffer } = file;

		const xlsx = read(buffer);
		const sheetName = xlsx.SheetNames[0];
		const sheetValues = xlsx.Sheets[sheetName];
		const dataJsonConvert: { [key: string]: string }[] =
			utils.sheet_to_json(sheetValues);
		const contacts: SimplePublicObjectInput[] = [];

		try {
			for (const properties of dataJsonConvert) {
				const contact = await hubspotClient.crm.contacts.basicApi.create({
					properties,
				});
				contacts.push(contact);
			}

			return contacts;
		} catch (error) {
			const err = error as Error;
			throw new AppError(err.message);
		}
	}
}

export { CsvToHubSpotUseCase };
