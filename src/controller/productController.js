const path = require("path");
const fs = require("fs");
const productPath = path.resolve(__dirname,"../data/products.json");
let products = JSON.parse(fs.readFileSync(productPath,"utf-8"));

const productController = {
    detail: (req,res) => {
        res.render("products/detail",{
            products
        })
    },
    catalogo: (req,res) =>{
        let producto = products.find(product=> product.id == req.params.id)
            
        res.render("products/catalogo", {
            producto
        })
    },
    create: (req,res) => {
        res.render("products/productCreate")
    },
    store: (req,res) => {
        let body =req.body
        let file = req.file
        let newProduct = {
            id: Date.now(),
            ...body,
            image:file.filename
        }
        products.unshift(newProduct)
        fs.writeFileSync(productPath,JSON.stringify(products,null,' '))
        res.redirect ("/")
    },
    edit: (req,res) => {
        let product = products.find(product => product.id == req.params.id)
        console.log(product);
        res.render("products/productEdit", {product})
    },
    update: (req,res) => {
        let product = products.find(product => product.id == req.params.id)
        let body = req.body
        product.name = body.name
        product.decription = body.decription
        product.price = body.price
        product.size = body.size
        product.category = body.category
        fs.writeFileSync(productPath,JSON.stringify(products,null,' '))
        res.redirect("/product/detail")
    
    } ,
    delete: (req,res) => {
        let product = products.find(product => product.id == req.params.id)
        res.render("products/productDelete", {product})
    },
    erase: (req,res) => {
        let product = products.find(product => product.id == req.params.id)
        let index = products.indexOf(product)
        products.splice(index,1)
        fs.writeFileSync(productPath,JSON.stringify(products,null,' '))
        res.redirect("/")
    }


};




module.exports = productController