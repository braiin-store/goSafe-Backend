import { DataTypes, Model} from 'sequelize';
import sequelize from '../config/sequelize';

class Cliente extends Model{}

Cliente.init({
    id:{
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
    direccion:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue:""
    },
    correo:{
        type: DataTypes.STRING,
        unique: true,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    estado: DataTypes.BOOLEAN,
},{
    sequelize
})

export default Cliente;