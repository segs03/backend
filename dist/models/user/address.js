"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class Address extends sequelize_1.Model {
}
exports.Address = Address;
Address.init({
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: db_1.sequelize,
    tableName: "address"
});
// Address.belongsTo(User, { targetKey: "id" });
