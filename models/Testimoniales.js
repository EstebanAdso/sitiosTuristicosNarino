import { Sequelize } from "sequelize";
import db from "../config/db.js";

//Accediendo a la tabla viajes
export const Testimonial = db.define('testimoniales',{
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})