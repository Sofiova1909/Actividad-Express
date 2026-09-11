const express = require('express');
const app = express();
require("dotenv/config")
const port = process.env.PUERTO || 3000;
//configuracion para lectura del archivo
const sistemaArchivo = require("fs")
const ruta = require("path")
const rutaArchivoJson = ruta.join(__dirname, "datos.json")
//libreria para subir archivos
const multer = require("multer")
const { validarNombre, validarCorreo, generarId } = require("./utilidades/validaciones");
const registroMiddleware = require("./middleware/registroMiddleware")






//configurar almacenamiento
const almacenamiento = multer.diskStorage(
    {
        destination: (req, file, cb)=>{
            cb(null, "misImagenes/")
        },
        filename: (req, file, cb)=>{
            const extensionArchivo = ruta.extname(file.originalname)
            cb(null, `${Date.now()}${extensionArchivo}`)
        }
    }
)
const subirArchivo = multer({storage: almacenamiento})


//middlewre body-parse, formatea los datos enviados
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//middleware creados, se ejecuta cada vez qu ehgao una peticion
app.use((req, res, next)=>{
    console.log(`tiempo milisegundos: ${Date.now()}`)
    console.log(`fecha: ${new Date().toISOString()}`)
    next()
})


app.use(registroMiddleware)



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


app.post("/api/aprendices", subirArchivo.single("imagen1"), (req, res)=>{ 
    const nuevoAprendiz = req.body 
    nuevoAprendiz.imagen = req.file? `/misImagenes/${req.file.filename}`: "sin imagen" 

    // Validaciones
    if (!validarNombre(nuevoAprendiz.nombre)) {
        return res.status(400).json({Error: "El nombre debe tener mínimo 3 letras."})
    }

    if (!validarCorreo(nuevoAprendiz.correo)) {
        return res.status(400).json({Error: "El correo electrónico no es válido."})
    }

    // Generar id automático
    nuevoAprendiz.id = generarId()

    //Utilizamos la lectura del archivo 
    sistemaArchivo.readFile(rutaArchivoJson, "utf-8", (error, datos)=>{ 
        //si hay error 
        if(error){ 
            return res.json({Error: "No se puede leer los datos." }) 
        } 
        //parse --> trasformar 
        const listaAprendices = JSON.parse(datos) 
        //agregar el nuevo aprendiz 
        listaAprendices.push(nuevoAprendiz) 
        //escribir en el archivo 
        sistemaArchivo.writeFile(rutaArchivoJson, JSON.stringify(listaAprendices, null, 2), 
        (error) => { 
            if(error){ 
                return res.status(500).json({Error: "No se puede registrar el aprendiz."})
            } 
            res.status(201).json({mensaje: "Aprendiz creado con exito."}) 
        }) 
    })
})


//endpoint para modificar
app.put("/api/aprendices/:id", (req, res)=>{
    res.status(200).json({mensaje: "Endpoint en construccion de modificar."})
})

//endpoint para eliminar
app.delete("/api/aprendices/:id", (req, res)=>{
    res.status(200).json({mensaje: "Endpoint en construccion de eliminar."})
})




//El servidor en funcionamiento
app.listen(port, function(){
    console.log(`Servidor http://localhost:${port}`);
});
