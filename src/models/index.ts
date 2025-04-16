import {sequelize} from '../config/db';


export const connectDb = async () => {
    await sequelize.authenticate().then(() => {
        console.log('Connection to the MSSQL database established successfully.');
    }).catch((error) => {
        console.error('Unable to connect to the database:', error)
    });
};



