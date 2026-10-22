const {Router} = require("express")

const listarUsuarios = require("../controllers/usuariosController")
//const crearUsuario = require("../controllers/usuariosController")

//variable para instanciar router
const enrutadorUsuario = new Router()

enrutadorUsuario.get("/listado", listarUsuarios)
//enrutadorUsuario.post("/crear", crearUsuario);
//enrutadorUsuario.get("/{id}")
//enrutadorUsuario.post("/crear")
//enrutadorUsuario.delete("/eliminar")

module.exports = enrutadorUsuario

