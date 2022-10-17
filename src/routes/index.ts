import { Router } from "express";
import multer from "multer";
import { CsvToHubSpotController } from "../modules/csvToHubSpot/csvToHubSpotController";
import { GetAllContactController } from "../modules/getContact/getAllContactController";

const route = Router();
const multerConfig = multer();

const getAllContactController = new GetAllContactController();
const csvToHubSpotController = new CsvToHubSpotController();

route.post("/", multerConfig.single("file"), csvToHubSpotController.handle);

route.get("/", getAllContactController.handle);

export { route };
