import faker from 'faker'
import supertest from 'supertest'

import app from '../src/app'

const request = supertest(app)

const genConductor = () => ({
    nombre: faker.name.firstName(),
    celular: faker.random.number({ min: 60000000, max: 70000000 }),
    direccion: faker.address.streetAddress(true),
    correo: faker.internet.email(),
    foto: 'https://picsum.photos/id/237/200/300',
    cedula: faker.random.number({ min: 1000000, max: 9999999 }),
    descuento: 0,
})

describe('API CONDUCTORES', () => {
    let url = `/api/conductores`
    it('should return an Array', async () => {
        let res = await request.get(url)
        expect(Array.isArray(res.body)).toBe(true)
    })

    it('should create a Conductor', async () => {
        let res = await request
            .post(url)
            .send(genConductor())

        expect(Boolean(res.body['id'])).toBe(true)
    })

    it('should return a Conductor(OBJ)', async () => {
        let res = await request.get(url)
        let obj = res.body.pop()

        if (!obj) expect().rejects

        res = await request.get(`${url}/${obj['id']}`)

        expect(res.status).toBe(200)
    })

    it('should update a Conductor', async () => {
        let res = await request.get(url)
        let obj = res.body.pop()

        if (!obj) expect().rejects

        res = await request
            .put(`${url}/${obj['id']}`)
            .send(genConductor())
        
        expect(res.status).toBe(200)
    })

    it('should Delete a Conductor', async () => {
        let res = await request.get(url)
        let obj = res.body.pop()

        if (!obj) expect().rejects
        
        res = await request.delete(`${url}/${obj['id']}`)
        expect(res.status).toBe(200)
    });
})