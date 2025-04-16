import dotenv from 'dotenv';
dotenv.config();

export let config = {
    MSSQL: {
        USER: process.env.MSSQL_USER || 'segs',
        PASSWORD: process.env.MSSQL_PASSWORD || 'Larrick1258$',
        SERVER: process.env.MSSQL_SERVER || 'localhost',
        DATABASE: process.env.MSSQL_DATABASE || 'ajosky',
    },

    JWT_SECRET: process.env.SECRET_KEY || 'mYsEcR3tK3Y',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "RefReshSeCr3T"
};
