import { Model } from 'sequelize'

export class Controller {
    /**
     * @param {Model} model 
     */
    constructor(model) {
        this.model = model;
    }

    all = async (_, res) => {
        try {
            return res.status(200).json(await this.model.findAll())
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    find = async ({ params }, res) => {
        try {
            return res.status(200).json(await this.model.findOne({ where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    store = async ({ body }, res) => {
        try {
            return res.status(200).json(await this.model.create(body))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    update = async ({ body, params }, res) => {
        try {
            return res.status(200).json(await this.model.update(body, { where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }

    destroy = async ({ params }, res) => {
        try {
            return res.status(200).json(await this.model.destroy({ where: { id: params.id } }))
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error })
        }
    }
}