import { Controller } from "../config/controller";
import { Suscripcion, Viaje } from "../config/relationships";

class SuscripcionController extends Controller {
    constructor() {
        super(Suscripcion)
    }
}

export default new SuscripcionController()