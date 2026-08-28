const express = require('express');
const app = express();
require("dotenv/config")
const port = process.env.PUERTO || 3000;
//configuracion para lectura del archivo
const sistemaArchivo = require("fs")
const ruta = require("path")
const rutaArchivoJson = ruta.join(__dirname, "datos.json")

//endpoint raiz
app.get("/", function(req, res){
    res.send("Hola aprendiento express")
})


// endpoint para ver datos del archivo
app.get("/api/aprendices", (req, res)=>{
    //datos vienen del archivo
    sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{
        //si hay error 
        if(error){
            return res.json({Error: "No se puede leer los datos." })
        }
        //parse --> trasformar
        const listaAprendices = JSON.parse(datos)
        res.json(listaAprendices)
    })
    
})

//Endpoint para crear aprendices
app.post("/api/aprendices", (req, res)=>{
    res.json({Mensaje: "Trabajando en el endpoint"})
})




app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`);
});
