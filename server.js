const express = require("express");
const server = express();
const dotenv = require("dotenv").config();

//servidor
server.listen(process.env.PORT,()=>{
    console.log(`ejecutando en el http://localhost:${process.env.PORT}`)
})

//motor de plantillasa
server.set("view engine", "ejs");

//navegador pueda acceder a pubic,archivos staticos
server.use("/resources", express.static(__dirname + "/public"));

//archivo para encontrar las rutas de la pg
server.use("/",require("./router"));



