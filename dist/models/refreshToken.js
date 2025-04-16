"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class RefreshToken extends sequelize_1.Model {
}
RefreshToken.init({
    token: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: users_1.User,
            key: 'id',
        },
    },
}, {
    sequelize: db_1.default,
    timestamps: false,
    tableName: 'refreshtokens',
});
exports.default = RefreshToken;
