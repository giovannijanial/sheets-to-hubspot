import { Router, Request, Response } from "express";
import { CsvToHubSpotController } from "../modules/csvToHubSpot/csvToHubSpotController";
import { GetAllContactController } from "../modules/getContact/getAllContactController";

const route = Router();
const getAllContactController = new GetAllContactController();
const csvToHubSpotController = new CsvToHubSpotController();

route.post("/", csvToHubSpotController.handle);
route.get("/", getAllContactController.handle);

export { route };
