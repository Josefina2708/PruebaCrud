const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        let filePath = path.resolve(__dirname, "../../public/images/products")
        cb(null,filePath)
    },
    filename:(req,file,cb) => {
        let name = "product-" + Date.now() + path.extname(file.originalname)
        cb(null,name)
    }
})

const upload = multer({storage})

module.exports = upload