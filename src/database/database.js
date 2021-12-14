import mongoose from "mongoose";
//import config from "../config/config";

export const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://admin:root@cluster0.ayz2x.mongodb.net/tiendaEsotericaProyecto?retryWrites=true&w=majority");
        console.log("DB conectada")
        
    } catch (error) {
        console.log(error)
        
    }
}


