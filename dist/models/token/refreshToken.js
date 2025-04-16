"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const users_1 = require("../user/users");
const sequelize_1 = require("sequelize");
const db_1 = require("../../config/db");
class RefreshToken extends sequelize_1.Model {
}
exports.RefreshToken = RefreshToken;
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
    sequelize: db_1.sequelize,
    timestamps: false,
    tableName: 'refreshtokens',
});
