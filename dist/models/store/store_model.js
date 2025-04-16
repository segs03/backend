"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = exports.Hair = exports.Pastery = exports.Fashion = exports.Oil = exports.Drink = exports.Craft = exports.Food = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../config/db"));
// Food Model
class Food extends sequelize_1.Model {
}
exports.Food = Food;
;
Food.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "foods",
    timestamps: true,
});
// Craft Model
class Craft extends sequelize_1.Model {
}
exports.Craft = Craft;
;
Craft.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "crafts",
    timestamps: true,
});
// Drink Model
class Drink extends sequelize_1.Model {
}
exports.Drink = Drink;
;
Drink.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "drinks",
    timestamps: true,
});
// OIL Model
class Oil extends sequelize_1.Model {
}
exports.Oil = Oil;
;
Oil.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "oils",
    timestamps: true,
});
// Fashion Model
class Fashion extends sequelize_1.Model {
}
exports.Fashion = Fashion;
;
Fashion.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "fashions",
    timestamps: true,
});
// Pastery Model
class Pastery extends sequelize_1.Model {
}
exports.Pastery = Pastery;
;
Pastery.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "pastery",
    timestamps: true,
});
// Hair Model
class Hair extends sequelize_1.Model {
}
exports.Hair = Hair;
;
Hair.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "hair",
    timestamps: true,
});
// Material Model
class Material extends sequelize_1.Model {
}
exports.Material = Material;
;
Material.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: db_1.default,
    tableName: "materials",
    timestamps: true,
});
