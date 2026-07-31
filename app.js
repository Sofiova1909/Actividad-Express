import express from "express"
//leer el archio .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PUERTO || 3030
app.get("/", function(req, res) {
res.send("Hola aprendiendo express, con la ficha 3407181, ADSO en el SENA hoy  31 de julio")
});
app.listen(puerto, function() {
    console.log(`Servidor en funcionamiento en el puerto ${puerto}`)
});
