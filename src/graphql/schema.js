import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Usuarios: [Usuario],
        unUsuario(id:ID): Usuario,
        Proyectos: [Proyecto],
        unProyecto(id:ID): Proyecto,
        avanceProyecto(id:ID):AvanceProyecto,
        Inscripciones: [Inscripcion],
        unaInscripcion(id:ID): Inscripcion,
        Avances: [Avance],
        unAvance(id:ID): Avance,
        Login(email:String!,password:String!):String,
        UsuariosEstudiantes: [Usuario],
        MisProyectos(idUsuario:ID!):[Proyecto],

    }

    type Mutation {
        AgregarUsuario(usuario : UsuarioInput): Usuario
        ActualizarEstadoUsuario(id : ID!, input : UsuarioInputEstado): Usuario
        ActualizarDatosUsuario(id : ID!, input : UsuarioInputDatos): Usuario
        AgregarProyecto(proyecto : ProyectoInput): Proyecto
        ActualizarEstadoProyecto(id : ID!, input : ProyectoInputEstado): Proyecto
        ActualizarFaseProyecto(id : ID!, input : ProyectoInputFase): Proyecto
        ActualizarDatosProyecto(id : ID!, input : ProyectoInputDatos): Proyecto
        AgregarInscripcion(inscripcion : InscripcionInput): Inscripcion
        ActualizarEstadoInscripcion(id : ID!, input : InscripcionInputEstado): Inscripcion
        AgregarAvance(avance : AvanceInput): Avance
        ActualizarDatosAvance(id : ID!, input : AvanceInputDatos): Avance
        ActualizarObservacionAvance(id : ID!, input : AvanceInputObservacion): Avance
        
    }

    type Usuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    type UnUsuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    input UsuarioInput {
        id: String,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        estado: String,
        password: String,
        rol: String,
    } 

    input UsuarioInputEstado {
        estado: String,
    }

    input UsuarioInputDatos {
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
    }
    type Avance {
        id: ID,
        idProyecto: String,
        fechaAvance: String, 
        descripcionAvance: String, 
        observacionAvance: String, 
    }

    type Proyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider:Usuario,
        estadoProyecto : String,
        faseProyecto: String,
        avance:[Avance]
    }

    type unProyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }


    type AvanceProyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
        avance:[Avance]
    }


    input ProyectoInput {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }

    input ProyectoInputEstado {
        estadoProyecto : String,
    }

    input ProyectoInputFase {
        faseProyecto: String,
    }

    input ProyectoInputDatos {
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }

    type Inscripcion {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }

    type unaInscripcion {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }

    input InscripcionInput {
        id: ID,
        idProyecto: String,
        idUsuario: String,
        estadoInscripcion: String,
        fechaIngreso: String,
        fechaEgreso: String,
    }

    input InscripcionInputEstado {
        estado: String,
    }


    type UnAvance {
        id: ID,
        idProyecto: String,
        fechaAvance: String,
        descripcionAvance: String,
        observacionAvance: String,
    }

    input AvanceInput {
        id: ID,
        idProyecto: String,
        fechaAvance: String,
        descripcionAvance: String,
        observacionAvance: String,
    }

    input AvanceInputDatos {
        fechaAvance : String,
        descripcionAvance: String,
    }

    input AvanceInputObservacion {
        observacionAvance : String,
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})