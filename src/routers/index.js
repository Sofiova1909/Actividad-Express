const {Router} = require("express")

const enrutadorUsuario = require("./usuariosRouter")

const enrutadorGeneral = new Router()

enrutadorGeneral.use("/usuarios", enrutadorUsuario)

module.exports = enrutadorGeneral

