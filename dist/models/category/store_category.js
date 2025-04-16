"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreCategory = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class StoreCategory extends sequelize_1.Model {
}
exports.StoreCategory = StoreCategory;
StoreCategory.init({
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imagePath: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: "storecategory",
});
