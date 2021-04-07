import { Controller } from '../config/controller'
import { Conductor } from '../config/relationships'

import { uploadBase64, destroyIMG } from '../services/cloudinary'

class ConductorController extends Controller {
    constructor() {
        super(Conductor)
    }

    store = async ({ body }, res) => {
        try {
            let apiRes = uploadBase64(body.foto)

            body.foto = apiRes.url
            body.public_id = apiRes.public_id

            return res.status(200).json(await Conductor.create(body))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    update = async ({ body, params }, res) => {
        try {
            if (body.foto?.includes('data:image/') && body.public_id) {
                let apiRes = uploadBase64(body.foto, body.public_id)
                body.foto = apiRes.url
            }

            return res
                .status(200)
                .json(await Conductor.update(body, { where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    destroy = async ({ headers, params }, res) => {
        try {
            destroyIMG(headers.public_id)
            
            return res
                .status(200)
                .json(await Conductor.destroy({ where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }
}

export default new ConductorController()