import fs from 'fs'

const base64Obj = base64Str => {
    let base64 = base64Str.split(';base64,')
    return {
        data: base64.pop(),
        ext: base64[0].split('/').pop(),
    }
}

export const uploadBase64 = (base64Str, public_id = null) => {
    let base64 = base64Obj(base64Str)
    public_id ??= `${Date.now()}.${base64.ext}`
    
    let path = `public/${public_id}`
    fs.writeFileSync(path, base64.data, { encoding: 'base64' })

    return {
        public_id,
        url: `${process.env.APP_URL}/${path}`,
    }
}

export const destroyIMG = (public_id) => {
    let path = `public/${public_id}`
    fs.unlinkSync(path)
}