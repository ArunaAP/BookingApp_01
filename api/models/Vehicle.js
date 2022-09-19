import mongoose from "mongoose";
const { Schema } = mongoose;

const VehicleSchema = new mongoose.Schema({
  image: {
    type: [String],
  },
  vehicle_class: {
    type: String,
    required: true,
  },
  vehicle_type: {
    type: String,
    required: true,
  },
  vehicle_model: {
    type: String,
    required: true,
  },
  vehicle_seats: {
    type: String,
    required: true,
  },
  vehicle_register_number: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Vehicle", VehicleSchema);
