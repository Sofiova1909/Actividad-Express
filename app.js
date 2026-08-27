import express from "express"
//leer el archio .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PUERTO || 3030
//uso de middlewara body-parse (parsear los datos enviados por el body)
app.use(express.json())

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


//enpoint para envio de datos
app.post("/ruta2", (req, res)=>{
    const todosDatos = req.body
    const name = req.body.nombre
    const lastname = req.body.Cargo
    res.status(201).json({Datos: todosDatos, nombre: name, cargo: lastname})
})



app.post("/login", (req, res) => {

    const usuario = req.body.usuario
    const perfil = req.body.perfil
    const contraseña = req.body.contraseña

    // Validar si no se enviaron datos
    if (!usuario || !perfil || !contraseña) {
        return res.status(400).json({
            mensaje: "Faltan datos por enviar"
        })
    }

    // Validar perfil Admin
    if (perfil === "Admin") {
        return res.status(200).json({
            mensaje: `Bienvenido ${usuario}, has ingresado como Admin`
        })
    }

    // Validar perfil User
    if (perfil === "User") {
        return res.status(200).json({
            mensaje: `Bienvenido ${usuario}, has ingresado como User`
        })
    }

    // Si el perfil no es Admin ni User
    return res.status(403).json({
        mensaje: "No tiene acceso"
    })

})


app.listen(puerto, function() {
    console.log(`SERVIDOR: http://localhost:${puerto}`)
});

