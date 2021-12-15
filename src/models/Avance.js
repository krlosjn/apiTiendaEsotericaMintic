const { Schema, model } = require("mongoose");
const Proyecto= require('./Proyecto');

const AvanceSchema = Schema({
    "idProyecto": { type: Schema.Types.ObjectId,ref:'Proyecto', required: true },
    "fechaAvance": { type: String, required: true },
    "descripcionAvance": { type: String, required: true },
    "observacionAvance": { type: String, require: false },
})
module.exports = model("Avance", AvanceSchema);