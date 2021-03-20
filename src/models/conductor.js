import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Conductor extends Model { }

Conductor.init({
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
    direccion: DataTypes.STRING,
    correo: {
        type: DataTypes.STRING,
        unique: true,
    },
    foto: DataTypes.STRING,
    cedula: {
        unique: true,
        type: DataTypes.INTEGER,
    },
    descuento: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    }
}, { sequelize })

export default Conductor;