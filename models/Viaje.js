import { Sequelize } from "sequelize";
import db from "../config/db.js";

//Accediendo a la tabla viajes
export const Viaje = db.define('viajes',{
    titulo: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
})