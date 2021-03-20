import { Controller } from '../config/controller';
import { Auxilio } from '../config/relationships';

class AuxilioController extends Controller {
    constructor() {
        super(Auxilio)
    }
}

export default new AuxilioController()