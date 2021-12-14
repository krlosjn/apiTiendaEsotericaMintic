const { Schema, model } = require("mongoose");
const Usuario = require("./Usuario");

const ProyectoSchema = Schema({
    nombreProyecto : { type: String, required: true },
    objetivosGenerales : [String],
    objetivosEspecificos : [String],
    presupuesto: { type: Number, required: false},
    fechaInicio : { type: Date, require: true},    
    fechaTerminacion : { type: Date, require: true },
    lider : {
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    },
    //"lider" : { type: String, require: true },
    //"idLider" : { type: String, require: true },
    //"documentoLider" : { type: String, require: true },
    //"nombreLider" : { type: String, require: true },
    estadoProyecto: { type: String, require: true, default: "INACTIVO" },
    faseProyecto: { type: String, require: true, default: null },
})
module.exports = model("Proyecto", ProyectoSchema);
