import { Cliente } from '../config/relationships'
import { Controller } from '../config/controller'

import { destroyIMG, uploadBase64 } from '../services/cloudinary'

class ClienteController extends Controller {
    constructor() {
        super(Cliente)
    }

    store = async ({ body }, res) => {
        try {
            let apiRes = uploadBase64(body.foto)

            body.foto = apiRes.url
            body.public_id = apiRes.public_id

            return res.status(200).json(await Cliente.create(body))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    update = async ({ body, params }, res) => {
        try {
            if (body.foto?.includes('data:image/') && body.public_id) {
                let apiRes = uploadBase64(body.foto, body.public_id)
                body.foto = apiRes.secure_url
            }

            return res
                .status(200)
                .json(await Cliente.update(body, { where: { id: params.id } }))
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
                .json(await Cliente.destroy({ where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }
}

export default new ClienteController()