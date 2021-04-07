import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../../public/');
    },

    filename: (req, file, cb, )=>{
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
        
    }
})

const  upload = (req, res, next) =>{
    multer({storage: storage});

    console.log(req.file);
    next();
} 

    
export default upload;