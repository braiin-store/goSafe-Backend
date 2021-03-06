import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize';

class Suscripcion extends Model { }
class DetalleSuscripcion extends Model { }
class TipoPago extends Model { }
class Resultado extends Model { }

Suscripcion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    dias: DataTypes.BIGINT,
    precio: DataTypes.FLOAT,
    descuento: DataTypes.BOOLEAN,

}, { sequelize });

DetalleSuscripcion.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    precio: DataTypes.FLOAT,
    descuento: DataTypes.INTEGER,
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
}, { sequelize });

TipoPago.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    tipo: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
}, { sequelize })

Resultado.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true,
    },
    status: DataTypes.STRING,
}, { sequelize })

export {
    Suscripcion, TipoPago, DetalleSuscripcion, Resultado
}