const { Schema, model } = require("mongoose");
const Usuario=require('./Usuario');
const Poryecto= require('./Proyecto');

const InscripcionSchema = Schema({
    "idProyecto" : { type: Schema.Types.ObjectId, ref:'Proyecto', required: true },
    "idUsuario" : { type: Schema.Types.ObjectId,ref:'Usuario', required: true },
    "estadoInscripcion" : { type: String, required: true },
    "fechaIngreso" : { type: String, require: true},
    "fechaEgreso" : { type: String, require: true },
})
module.exports = model("Inscripcion", InscripcionSchema);
