import { Controller } from '../config/controller'
import { Cliente } from '../config/relationships'

class ClienteController extends Controller {
    constructor() {
        super(Cliente)
    }
}

export default new ClienteController()