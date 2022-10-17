import { Router } from "express";
import multer from "multer";
import { SheetToHubSpotController } from "../modules/sheetToHubSpot/sheetToHubSpotController";
import { GetAllContactController } from "../modules/getContact/getAllContactController";

const route = Router();
const multerConfig = multer();

const getAllContactController = new GetAllContactController();
const sheetToHubSpotController = new SheetToHubSpotController();

route.post("/", multerConfig.single("file"), sheetToHubSpotController.handle);

route.get("/", getAllContactController.handle);

export { route };
