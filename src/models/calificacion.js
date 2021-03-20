import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Calificacion extends Model { }

Calificacion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    musica: DataTypes.STRING,
    limpia: DataTypes.STRING,
    temperatura: DataTypes.STRING,
    conversacion: DataTypes.STRING,
    Responsabilidad: DataTypes.STRING,
}, { sequelize })

export default Calificacion;