import { args } from "commander";
import Avance from "../models/Avance";
import Proyecto from "../models/Proyecto";
import Usuario from "../models/Usuario";
import Inscripcion from "../models/Inscripcion";
import bcrypt from "bcrypt";

export const resolvers = {
    Query: {
        Usuarios() {
            return Usuario.find().populate();
        },
        unUsuario(parents, args) {
            return Usuario.findById(args.id)
        },
        Proyectos() {
            return Proyecto.find().populate();
        },
        unProyecto(parents, args) {
            return Proyecto.findById(args.id)
        },
        async avanceProyecto(parents, args) {
         
            return await Proyecto.find().populate();
        },
       
        Inscripciones() {
            return Inscripcion.find()
        },
        unaInscripcion(parents, args) {
            return Inscripcion.findById(args.id)
        },
        Avances() {
            return Avance.find();
        },
        unAvance(parents, args) {
            return Avance.findById(args.id)
        },
        async Login(_,{email,password}){
           
           const  usuario=await Usuario.findOne({email})
            if(!usuario){
                return  false
            }
             const validarPassword=bcrypt.compareSync(password,usuario.password);
            if(!validarPassword){
                 return false
            }else {
                return   true
            }
        },
       async UsuariosEstudiantes(){
           return await Usuario.find({rol:'Estudiante'});
       },
       async MisProyectos(_,{usuario}){
        return await Proyecto.find({lider:usuario}).populate('lider',"nombreCompleto");;
    }
        
    },

    Mutation: {
        async AgregarUsuario(_, { usuario }) {
            const salt=bcrypt.genSaltSync();
            const nUsuario = new Usuario({
                
                email: usuario.email,
                identificacion: usuario.identificacion,
                nombreCompleto: usuario.nombreCompleto,
                password: bcrypt.hashSync(usuario.password,salt),
                estado:usuario.estado,
                rol: usuario.rol,
            });
            return await nUsuario.save();
        },
        async ActualizarEstadoUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },
        async ActualizarDatosUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarProyecto(_, { proyecto }) {
            const nProyecto = new Proyecto({
                nombreProyecto: proyecto.nombreProyecto,
                objetivosGenerales: proyecto.objetivosGenerales,
                objetivosEspecificos: proyecto.objetivosEspecificos,
                presupuesto: proyecto.presupuesto,
                fechaInicio: proyecto.fechaInicio,
                fechaTerminacion: proyecto.fechaTerminacion,
                lider: proyecto.lider,
                estadoProyecto: proyecto.estadoProyecto,
                faseProyecto: proyecto.faseProyecto
            });
            return await nProyecto.save();
        },
        async ActualizarEstadoProyecto(_, { id, input }) {
            return await Proyecto.findByIdAndUpdate(id, input, { new: true });
        },
        async ActualizarFaseProyecto(_, { id, input }) {
            return await Proyecto.findByIdAndUpdate(id, input, { new: true });
        },
        async ActualizarDatosProyecto(_, { id, input }) {
            return await Proyecto.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarAvance(_, { avance }) {
            const nAvance = new Avance({
                idProyecto: avance.idProyecto,
                fechaAvance: avance.fechaAvance,
                descripcionAvance: avance.descripcionAvance,
                observacionAvance: avance.observacionAvance,
            });
            return await nAvance.save();
        },
        async ActualizarDatosAvance(_, { id, input }) {
            return await Avance.findByIdAndUpdate(id, input, { new: true });
        },
        async ActualizarObservacionAvance(_, { id, input }) {
            return await Avance.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarInscripcion(_, { inscripcion }) {
            const nInscripcion = new Inscripcion({
                idProyecto: inscripcion.idProyecto,
                idUsuario: inscripcion.idUsuario,
                estadoInscripcion: inscripcion.estadoInscripcion,
                fechaIngreso: inscripcion.fechaIngreso,
                fechaEgreso: inscripcion.fechaEgreso,
            });
            return await nInscripcion.save();
        },
        async ActualizarEstadoInscripcion(_, { id, input }) {
            return await Inscripcion.findByIdAndUpdate(id, input, { new: true });
        },
    }
}