import moment from "moment";
import { Controller } from "../config/controller";
import {
	DetalleSuscripcion,
	Suscripcion,
	Viaje,
} from "../config/relationships";

class SuscripcionController extends Controller {
	constructor() {
		super(Suscripcion);
	}
	susbscribeDriver = async ({ body }, res) => {
		try {
			
			const subscription = await Suscripcion.findByPk(body.suscripcion.id);
            const fechaInicio=moment(body.suscripcion.fechaInicio,'DD/MM/YYYY')
            const fechaFin=moment(body.suscripcion.fechaInicio,'DD/MM/YYYY').add(subscription.dias,'days')
            
			await DetalleSuscripcion.create({
				precio: subscription.precio,
				descuento: subscription.descuento,
				fechaInicio,
				fechaFin
			});
			res.status(200).json({msg:'ok'});
		} catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
	};
}

export default new SuscripcionController();
