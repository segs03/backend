import { User } from '../user/users';
import { DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import {sequelize} from '../../config/db';


export class RefreshToken extends Model<InferAttributes<RefreshToken>, InferCreationAttributes<RefreshToken>> {
    declare token: string;
    declare userId: ForeignKey<User["id"]>;
}


RefreshToken.init(
    {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'refreshtokens',
    }
);


