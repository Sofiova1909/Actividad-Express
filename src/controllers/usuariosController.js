//importar
const crear = require("../services/usuariosService")
const crear = async (req, res) => {
    try {
        const { email, username, clave, foto } = req.body;
        const usuario = await usuariosService.crear(
            email,
            username,
            clave,
            foto
        );

        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({  "Error-mensaje": error.message});
    }
};



const listar = require("../services/usuariosService")
const listarUsuarios = async(req, res)=>{
    try {
        const usuarios = await listar ()
        res.status(200).json({usuarios})
    } catch (error) {
        res.status(500).json({"Error-mensaje": error.message})
    }
}




module.exports = listarUsuarios