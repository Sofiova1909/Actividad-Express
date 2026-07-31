import express from "express"
//leer el archio .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PUERTO || 3030


app.get("/", function(req, res) {
res.send("Hola aprendiendo express, con la ficha 3407181, ADSO en el SENA hoy  31 de julio")
});

//otro endpoint
app.get("/otraruta", (req, res)=>{
    res.send(`<h1>Otro ejemplo de ruta</h1>
        <h2>End point con res.semd</h2>
        `)
})

//otro endpoint: response json
app.get("/ruta2", (req, res)=>{
    res.json({"nombre": "sofia", "Apellido": "Guerrero", "Cargo": "Instructor"})
})

//otro endpoint: request parametros
app.get("/ruta3/:aprendiz/:otrodato", (req, res)=>{
    //definir variables ne javascript -- const
    const dato_aprendiz = req.params.aprendiz
    const otro_dato = req.params.otrodato
    res.json({"nombre": dato_aprendiz, "Apellido": otro_dato})
})



//otro endpoint: request query
app.get("/ruta4", (req, res)=>{
    //capturar el parametro de consulta grey
    const orden = req.query.orden || "sin ordenar"
    const pagina = req.query.pagina || 79
    res.send(`<h1>Listado Aprendices</h1>
        <p>El lsitado esta en orden ${orden}</p>
        <p>Pagina: ${pagina}</p>
        `)
})











app.listen(puerto, function() {
    console.log(`SERVIDOR: http://localhost:${puerto}`)
});

