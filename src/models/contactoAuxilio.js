import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class ContactoAuxilio extends Model { }

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
}, {
    sequelize
});
export default ContactoAuxilio;