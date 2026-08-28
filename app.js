import express from "express"
//leer el archio .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();
const puerto = process.env.PUERTO || 3030
//uso de middlewara body-parse (parsear los datos enviados por el body)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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


// Actividad : Endpoint login
app.post("/login", function(req, res){

    const usuario = req.body.usuario
    const perfil = req.body.perfil
    const clave = req.body.clave

    if (perfil === "Admin" &&  clave === "12345"){
        return res.send (`Bienvenido administrador: ${usuario}, Clave correcta: ${clave}`)
    }

    else {
        return res.send (`Clave incorrecta: ${clave}`)
    }


})


//Formulario
app.post("/formulario", (req, res)=>{
    const datosForm = req.body
    const miNombre = req.body.nombre
    const miApellido = req.body.apellido
    const miCargo = req.body.cargo
    res.status(200).json({Mensaje: "Datos recibidos", nombre: miNombre, apellido: miApellido, cargo: miCargo})
})









app.listen(puerto, function() {
    console.log(`SERVIDOR: http://localhost:${puerto}`)
});

