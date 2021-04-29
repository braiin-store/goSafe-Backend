import { Role } from '../../src/config/relationships'

const seed = async () => {
    await Role.create({ name: 'admin' })
    await Role.create({ name: 'cliente' })
    await Role.create({ name: 'conductor' })
}

export default {
    seed
}