//utilizar prisma
const ormPrisma = require("../config/conexion")
const listar = async ()=> {
    const datos = await ormPrisma.usuarios.findMany()
    return datos
}

const crear = async (email , username, clave, foto)=>{
    const userNew = await ormPrisma.usuarios.create({data: {
        email: email,
        username: username,
        clave: clave,
        foto: foto
        
    }})
}

module.exports = listar