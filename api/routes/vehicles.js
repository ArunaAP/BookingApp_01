import { nextDay } from "date-fns";
import express, { request } from "express";
import {
  createVehicle,
  deleteVehicle,
  getVehicle,
  getVehicles,
  updateVehicle,
} from "../controllers/vehicle.js";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

//Add
router.post("/", createVehicle);

//update
router.put("/:id", updateVehicle);

//Delete
router.delete("/:id", deleteVehicle);
//get

router.get("/:id", getVehicle);
//Get All

router.get("/", getVehicles);

export default router;
