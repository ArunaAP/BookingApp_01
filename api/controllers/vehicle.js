import Vehicle from "../models/Vehicle.js";
export const createVehicle = async (req, res, next) => {
  const newVehicle = new Vehicle(req.body);
  try {
    const saveVehicle = await newVehicle.save();
    res.status(200).json(saveVehicle);
  } catch (err) {
    next(err);
  }
};

export const updateVehicle = async (req, res, next) => {
  try {
    const updateVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateVehicle);
  } catch (err) {
    next(err);
  }
};
export const deleteVehicle = async (req, res, next) => {
  try {
    await Vehicle.findByIdAndDelete(req.params.id);
    res.status(200).json("Vehicle has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getVehicle = async (req, res, next) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    res.status(200).json(vehicle);
  } catch (err) {
    next(err);
  }
};
export const getVehicles = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    next(err);
  }
};
