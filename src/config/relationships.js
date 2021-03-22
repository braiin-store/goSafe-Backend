import Viaje from '../models/viaje'
import Auxilio from '../models/auxilio'
import Conductor from '../models/conductor'
import Calificacion from '../models/calificacion'

import { User, Role } from '../models/user'
import { Cliente, Direccion, ContactoAuxilio } from '../models/cliente'

Role.hasMany(User)
User.belongsTo(Role)

Cliente.hasMany(Direccion)
Direccion.belongsTo(Cliente)

Cliente.hasMany(ContactoAuxilio)
ContactoAuxilio.belongsTo(Cliente)

Conductor.hasMany(Direccion)
Direccion.belongsTo(Conductor)

Conductor.hasMany(ContactoAuxilio)
ContactoAuxilio.belongsTo(Conductor)

Conductor.hasOne(Calificacion)
Calificacion.belongsTo(Conductor)

export {
    User,
    Role,

    Viaje,
    Auxilio,

    Conductor,
    Calificacion,

    Cliente,
    Direccion,
    ContactoAuxilio,
}