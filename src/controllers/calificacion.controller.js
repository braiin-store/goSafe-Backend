import { Controller } from "../config/controller";
import { Calificacion } from "../config/relationships";

class CalificacionController extends Controller {
    constructor() {
        super(Calificacion)
    }
}

export default new CalificacionController()