import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class User extends Model { }
class Role extends Model { }

User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize });

Role.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    }
}, { sequelize });

export {
    User, Role
}