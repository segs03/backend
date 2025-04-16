"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const db_1 = require("../../config/db");
const sequelize_1 = require("sequelize");
const store_category_1 = require("../category/store_category");
const address_1 = require("../user/address");
class Store extends sequelize_1.Model {
}
exports.Store = Store;
Store.init({
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "stores",
    timestamps: false,
});
Store.belongsToMany(store_category_1.StoreCategory, { through: "catgory" });
store_category_1.StoreCategory.belongsToMany(Store, { through: "category" });
address_1.Address.belongsToMany(Store, { through: "stores", sourceKey: "id" });
Store.hasMany(address_1.Address, { sourceKey: "id" });
