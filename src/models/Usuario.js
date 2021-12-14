const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
    "email" : { type: String, required: true },
    "identificacion" : { type: String, require: true },
    "nombreCompleto" : { type: String, required: true },
    "password" : { type: String, required: true },
    "estado" : { type: String, required: false },
    "rol" : { type: String, required: true },
})
module.exports = model("Usuario", UsuarioSchema);