//Configuración de la base de datos
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

//base de datos, usuario y contraseña
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

export default db