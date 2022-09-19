import mongoose from 'mongoose';
const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    address:{
        type: String,
        require:true
    },
    contactNumber:{
        type: String,
        required:true
    },
    type:{
        type: String,
        require:true
    },
    price:{
        type: String,
        require:true
    },
    numberOfBeds:{
        type: String,
        require:true
    },
   
    distance:{
        type: String,
        require:true
    },
    photos:{
        type: [String],
    },

    rating:{
        type: Number,
        min:0,
        max:5
    },
        
});


export default mongoose.model("Room", RoomSchema)