import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Cliente extends Model { }
class Direccion extends Model { }
class ContactoAuxilio extends Model { }

Cliente.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    nombre: DataTypes.STRING,
    celular: {
        type: DataTypes.INTEGER,
        unique: true,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    sequelize
})

Direccion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    nombre: DataTypes.STRING,
    location: DataTypes.GEOMETRY('POINT'),
}, { sequelize })

ContactoAuxilio.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    nombre: DataTypes.STRING,
    nro: DataTypes.INTEGER,
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, { sequelize });

export {
    Cliente,
    Direccion,
    ContactoAuxilio,
};