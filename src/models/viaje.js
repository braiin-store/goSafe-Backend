import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/sequelize'

class Viaje extends Model { }

Viaje.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    },
    fecha: DataTypes.TIME,
    monto: DataTypes.FLOAT,
    origen: DataTypes.GEOMETRY('POINT'),
    destino: DataTypes.GEOMETRY('POINT'),
    status: DataTypes.STRING,
    responsableCancel: DataTypes.BOOLEAN,
    calificacionConductor: DataTypes.STRING,
}, {
    sequelize
})

export default Viaje