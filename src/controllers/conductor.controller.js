import { Controller } from '../config/controller'
import { Conductor } from '../config/relationships'

class ConductorController extends Controller {
    constructor() {
        super(Conductor)
    }
}

export default new ConductorController()