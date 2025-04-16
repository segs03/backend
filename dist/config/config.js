"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    MSSQL: {
        USER: process.env.MSSQL_USER || 'segs',
        PASSWORD: process.env.MSSQL_PASSWORD || 'Larrick1258$',
        SERVER: process.env.MSSQL_SERVER || 'DESKTOP-PQO07A9',
        DATABASE: process.env.MSSQL_DATABASE || 'ajosky',
    },
    JWT_SECRET: process.env.SECRET_KEY || 'mYsEcR3tK3Y',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "RefReshSeCr3T"
};
