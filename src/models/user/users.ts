import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import bcrypt from 'bcrypt';
import {sequelize} from "../../config/db";
import {Address} from './address';


// Define the User model
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare firstname: string;
    declare lastname: string;
    declare email: string;
    // declare phone: CreationOptional<string>;
    declare password: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        firstname: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        lastname: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },

        // phone: {
        //     type: DataTypes.STRING(100),
        //     unique: true,
        //     allowNull: false,
        // },

        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },

        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        timestamps: true,
        tableName: "users",
    },
);


User.hasOne(Address, { sourceKey: "id" });
// Address.sync();


// Hook to hash the password before saving the user
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});


// Hook to hash password if updated
User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});




