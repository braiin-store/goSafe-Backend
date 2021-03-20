import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Auxilio extends Model { }

Auxilio.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, { sequelize })

export default Auxilio;