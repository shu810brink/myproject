import mongoose  from "mongoose";
const {Schema} = mongoose

const dashboardSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true

    },
    criteria:{
        type:String,
    },
    value:{
        type:String,
        required:true
    },
    days:{
        type:String,
    },
    pricesignal:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:true
    }

})
export default mongoose.model("signal",dashboardSchema);



