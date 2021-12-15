const { Schema, model } = require("mongoose");
const Usuario = require("./Usuario");

const ProyectoSchema = Schema({
    nombreProyecto : { type: String, required: true },
    objetivosGenerales : [String],
    objetivosEspecificos :{type:String, required:false},
    presupuesto: { type: Number, required: false},
    fechaInicio : { type: Date, require: true},    
    fechaTerminacion : { type: Date, require: true },
    lider : {
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    },
    estadoProyecto: { type: String, require: true},
    faseProyecto: { type: String, require: true},
})
module.exports = model("Proyecto", ProyectoSchema);
