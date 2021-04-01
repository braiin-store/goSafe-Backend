import cloud from '../services/cloudinary'

import { Controller } from '../config/controller'
import { Conductor } from '../config/relationships'

class ConductorController extends Controller {
    constructor() {
        super(Conductor)
    }

    store = async ({ body }, res) => {
        try {
            let apiRes = await cloud.uploadBase64(body.foto)

            body.foto = apiRes.secure_url
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
                let apiRes = await cloud.uploadBase64(body.foto, body.public_id)
                body.foto = apiRes.secure_url
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
            let apiRes = await cloud.destroyIMG(headers.public_id)
            if (apiRes['result'] === 'ok') {
                return res
                    .status(200)
                    .json(await Conductor.destroy({ where: { id: params.id } }))
            }

            return res.status(507).json(apiRes)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }
}

export default new ConductorController()