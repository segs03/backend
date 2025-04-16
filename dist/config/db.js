"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
const sequelize_1 = require("sequelize");
// Initialize dotenv for environment variables
dotenv_1.default.config();
const { SERVER, DATABASE, PASSWORD, USER } = config_1.config.MSSQL;
exports.sequelize = new sequelize_1.Sequelize(DATABASE, USER, PASSWORD, {
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
