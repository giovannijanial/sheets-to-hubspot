import axios, { AxiosError } from "axios";
import { IContact } from "../../interfaces/Contact";
import { AppError } from "../../utils/errors/AppError";
import * as hubspot from "@hubspot/api-client";
const TOKEN = "pat-na1-595e6a85-6362-4e34-b8dc-bd43569ede0c";
const hubspotClient = new hubspot.Client({
	accessToken: TOKEN,
});

class GetAllContactUseCase {
	async execute(): Promise<any> {
		try {
			const res = await hubspotClient.crm.contacts.basicApi.getPage();

			return res.results;
		} catch (error) {
			const err = error as Error;
			throw new AppError(err.message);
		}
	}
}

export { GetAllContactUseCase };
