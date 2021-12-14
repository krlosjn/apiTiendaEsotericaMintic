const { Schema, model } = require("mongoose");
const AvanceSchema = Schema({
    "idProyecto": { type: String, required: true },
    "fechaAvance": { type: String, required: true },
    "descripcionAvance": { type: String, required: true },
    "observacionAvance": { type: String, require: false },
})
module.exports = model("Avance", AvanceSchema);