require("dotenv").config()
const express = require("express")

const miApp = express()

//mi aplicacion utiliza los moddleware
miApp.use(express.json())
miApp.use(express.urlencoded({extended: true}))
//importar middleware propios

//ruta principal de mi api
miApp.get("/", (req, res)=>{
    res.send("Mi API Rest ficha 3407181.")
})

module.exports = miApp 