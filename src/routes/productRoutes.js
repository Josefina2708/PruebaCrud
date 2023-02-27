const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const upload =require("../middleware/productMulter")

router.get("/product/detail",productController.detail)

router.get("/product/create",productController.create);

router.post("/product/create",upload.single("image"),productController.store);

router.get("/product/catalogo/:id",productController.catalogo);

router.get("/product/edit/:id", productController.edit);

router.put("/product/edit/:id", productController.update);

router.get("/product/delete/:id",productController.delete);

router.delete("/product/delete/:id",productController.erase);

module.exports = router;