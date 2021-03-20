import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

config();
const sequelize = new Sequelize(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIAL,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        logging: false,
        define: {
            paranoid: true,
            defaultScope: {
                attributes: {
                    exclude: [
                        'createdAt', 'updatedAt', 'deletedAt'
                    ]
                }
            }
        },
    }
)
export default sequelize;