import * as hubspot from "@hubspot/api-client";
import { AppError } from "../../utils/errors/AppError";
const TOKEN = "pat-na1-595e6a85-6362-4e34-b8dc-bd43569ede0c";
const hubspotClient = new hubspot.Client({
	accessToken: TOKEN,
});

class CsvToHubSpotUseCase {
	async execute(): Promise<any> {
		const properties = {
			company: "Teste",
			email: "teste@teste.net",
			firstname: "Teste",
			lastName: "Silva",
			phone: "(877) 929-0687",
			website: "teste.net",
		};

		try {
			const res = await hubspotClient.crm.contacts.basicApi.create({
				properties,
			});

			return res;
		} catch (error) {
			const err = error as Error;
			console.log(err);
			throw new AppError(err.message);
		}
	}
}

export { CsvToHubSpotUseCase };
