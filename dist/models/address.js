"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class Address extends sequelize_1.Model {
}
Address.init({
    address: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: db_1.default,
    tableName: "address"
});
// Address.belongsTo(User, { targetKey: "id" });
exports.default = Address;
