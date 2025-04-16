import {sequelize} from "../../config/db";
import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { StoreCategory } from "../category/store_category";
import { Address } from "../user/address";




export class Store extends Model<InferAttributes<Store>, InferCreationAttributes<Store>> {
    declare name: string;
    declare description: string;
    declare address: string;
}


Store.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    sequelize,
    tableName: "stores",
    timestamps: false,
})


Store.belongsToMany(StoreCategory, { through: "catgory" });
StoreCategory.belongsToMany(Store, { through: "category" });
Address.belongsToMany(Store, { through: "stores", sourceKey: "id" });
Store.hasMany(Address, { sourceKey: "id" });

