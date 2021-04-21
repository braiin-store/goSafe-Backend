
import { Op } from "sequelize";
import { Controller } from "../config/controller";
import {
	Conductor,
	DetalleSuscripcion,
	Suscripcion,
} from "../config/relationships";

import { uploadBase64, destroyIMG } from "../services/cloudinary";

class ConductorController extends Controller {
	constructor() {
		super(Conductor);
	}
	allWithSuscriptions = async ({ body }, res) => {
		try {
			const fechaActual = new Date();
           
			const allDrivers = await Conductor.findAll({
				include:[{ 
					model: DetalleSuscripcion,
					include: [{ model: Suscripcion }],
					 where: {
					 	fechaInicio:{[Op.lte]:  fechaActual },
                         fechaFin:{[Op.gte]:  fechaActual },
					 },
					 limit:1,
					 required: false, //eager loading
				 as:'DetalleSuscripcions'} ]
			});
			console.log(allDrivers);
			return res.status(200).json(allDrivers);
		} catch (error) {
			res.status(500).json(error);
			console.log(error);
		}
	};
	store = async ({ body }, res) => {
		try {
			let apiRes = uploadBase64(body.foto);

			body.foto = apiRes.url;
			body.public_id = apiRes.public_id;

			return res.status(200).json(await Conductor.create(body));
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	};

	update = async ({ body, params }, res) => {
		try {
			if (body.foto?.includes("data:image/") && body.public_id) {
				let apiRes = uploadBase64(body.foto, body.public_id);
				body.foto = apiRes.url;
			}

			return res
				.status(200)
				.json(await Conductor.update(body, { where: { id: params.id } }));
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	};

	destroy = async ({ headers, params }, res) => {
		try {
			destroyIMG(headers.public_id);

			return res
				.status(200)
				.json(await Conductor.destroy({ where: { id: params.id } }));
		} catch (error) {
			console.error(error);
			return res.status(500).json({ error });
		}
	};
}

export default new ConductorController();
