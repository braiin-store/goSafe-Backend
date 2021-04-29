import sequelize from '../src/config/sequelize'
import role from './role/role.seeder'

sequelize
    .authenticate()
    .then(async () => {
        // await sequelize.sync({ force: true })
        await role.seed()
        
        process.exit(0)
    })