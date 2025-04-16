import dotenv from 'dotenv';
import { config } from "./config";
import { Sequelize } from 'sequelize';

// Initialize dotenv for environment variables
dotenv.config();


const {SERVER, DATABASE, PASSWORD, USER } = config.MSSQL;
export const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: SERVER,
    dialect: "mssql",
    port: 1433,
    logging: false,
    sync: {
        force: false,
    },
    dialectOptions: {
        options: {
            encrypt: false,
            trustSererCertificate: true,
        }
    }
});
