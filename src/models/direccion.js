import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Direccion extends Model { }

Direccion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    nombre: DataTypes.STRING,
    location: DataTypes.GEOMETRY('POINT'),
}, {
    sequelize
});

export default Direccion;