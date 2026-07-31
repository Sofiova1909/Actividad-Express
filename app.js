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

//otro endpoint
app.get("/ruta2", (req, res)=>{
    res.json({"nombre": "sofia", "Apellido": "Guerrero", "Cargo": "Instructor"})
})

app.listen(puerto, function() {
    console.log(`SERVIDOR: http://localhost:${puerto}`)
});

