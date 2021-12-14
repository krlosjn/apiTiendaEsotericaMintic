const { Schema, model } = require("mongoose");
const InscripcionSchema = Schema({
    "idProyecto" : { type: String, required: true },
    "idUsuario" : { type: String, required: true },
    "estadoInscripcion" : { type: String, required: true },
    "fechaIngreso" : { type: String, require: true},
    "fechaEgreso" : { type: String, require: true },
})
module.exports = model("Inscripcion", InscripcionSchema);
