import { Client } from "@hubspot/api-client";
import { SimplePublicObjectInput } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { AppError } from "../../utils/errors/AppError";
const hubspotClient = new Client({
	accessToken: process.env.TOKEN,
});

class GetAllContactUseCase {
	async execute(): Promise<SimplePublicObjectInput[]> {
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
