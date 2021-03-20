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
    limpia: DataTypes.STRING,
    conversacion: DataTypes.STRING,
    musica: DataTypes.STRING,
    Responsabilidad: DataTypes.STRING,
    temperatura: DataTypes.STRING,
}, { sequelize })

export default Calificacion;