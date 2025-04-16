import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import {sequelize} from "../../config/db";




// Food Model
export class Food extends Model<InferAttributes<Food>, InferCreationAttributes<Food>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "foods",
        timestamps: true,
    },

);


// Craft Model
export class Craft extends Model<InferAttributes<Craft>, InferCreationAttributes<Craft>> {
    declare id: CreationOptional<Number>;
    declare name: String;
    declare description: CreationOptional<String>;
    declare price: Number;
    declare imageUrl: String;
};

Craft.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "crafts",
        timestamps: true,
    },

);


// Drink Model
export class Drink extends Model<InferAttributes<Drink>, InferCreationAttributes<Drink>> {
    declare id: CreationOptional<Number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Drink.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "drinks",
        timestamps: true,
    },

);


// OIL Model
export class Oil extends Model<InferAttributes<Oil>, InferCreationAttributes<Oil>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare type: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Oil.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "oils",
        timestamps: true,
    },

);


// Fashion Model
export class Fashion extends Model<InferAttributes<Fashion>, InferCreationAttributes<Fashion>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Fashion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "fashions",
        timestamps: true,
    },

);


// Pastery Model
export class Pastery extends Model<InferAttributes<Pastery>, InferCreationAttributes<Pastery>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Pastery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "pastery",
        timestamps: true,
    },

);


// Hair Model
export class Hair extends Model<InferAttributes<Hair>, InferCreationAttributes<Hair>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Hair.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "hair",
        timestamps: true,
    },

);


// Material Model
export class Material extends Model<InferAttributes<Material>, InferCreationAttributes<Material>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare description: CreationOptional<string>;
    declare price: number;
    declare imageUrl: string;
};

Material.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },

        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "materials",
        timestamps: true,
    },

);



