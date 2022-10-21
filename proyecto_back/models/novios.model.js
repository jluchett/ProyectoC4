const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoviosSchema = new Schema({
    nombre_novio:{type: String, required: true, max:100},
    edad:{type:Number, required: true, max:100},
    estatura:{type: Number, required: true, max:200},
    color_ojos:{type: String, required: true, max:50},
    nacionalidad:{type: String, required: false, max:70},
    etnia:{type: String, required: false, max:150}
});

module.exports = mongoose.model("novios", NoviosSchema);