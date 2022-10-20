const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoviosSchema = new Schema({
    novio_id:{type: String, required: true, max:60},
    nombre_novio:{type: String, required: true, max:100},
    edad:{type:Int32Array, required: true, max:2},
    estatura:{type: Float32Array, required: true, max:4},
    color_ojos:{type: String, required: true, max:10},
    nacionalidad:{type: String, required: false, max:70},
    etnia:{type: String, required: false, max:150}
});

module.exports = mongoose.model("novios", NoviosSchema);