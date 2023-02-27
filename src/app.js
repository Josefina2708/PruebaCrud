const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const productRoutes = require("./routes/productRoutes");
const methodOverrride = require("method-override");

app.set("view engine","ejs")
app.set("views",path.resolve(__dirname,"views"));

//-----MIDDLEWARES DE PUBLIC-------------

app.use(express.static("public"))

//-----MIDDLEWARES RECIBIENDO DATOS DEL FORMULARIO------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//-----LOS MIDDELWARES DE RUTAS VAN DEBAJO DE LOS MIDDLEWARES PERO ARRIBA DEL LISTEN----------
app.use(methodOverrride('_method'))
app.use(mainRoutes)
app.use(productRoutes)

//----ESTO VA ABAJO---------
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en  http://www.localhost${PORT}`);

});