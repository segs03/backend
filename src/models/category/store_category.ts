import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import {sequelize} from "../../config/db";



export class StoreCategory extends Model<InferAttributes<StoreCategory>, InferCreationAttributes<StoreCategory>> {
    public title!: string;
    public imagePath!: string;
}

StoreCategory.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "storecategory",
    }
);



