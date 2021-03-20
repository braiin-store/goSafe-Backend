import { Controller } from "../config/controller";
import { Viaje } from "../config/relationships";

class ViajeController extends Controller {
    constructor() {
        super(Viaje)
    }
}

export default new ViajeController()