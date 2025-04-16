import { Model, DataTypes, InferAttributes, InferCreationAttributes, ForeignKey, CreationOptional } from "sequelize";
import { User } from "./users";
import {sequelize} from "../../config/db";



export class Address extends Model<InferAttributes<Address>, InferCreationAttributes<Address>> {
    declare userId: ForeignKey<User["id"]>;
    declare address: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}


Address.init(
    {
        address: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: "address"
    },
);

// Address.belongsTo(User, { targetKey: "id" });


