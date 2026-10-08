// Validar que el nombre tenga mínimo 3 letras
function validarNombre(nombre) {
    if (!nombre || typeof nombre !== "string") {
        return false;
    }
    return nombre.trim().length >= 3;
}

// Validar el correo electrónico con expresión regular
function validarCorreo(correo) {
    if (!correo || typeof correo !== "string") {
        return false;
    }
    const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionCorreo.test(correo);
}

// Generar un id automático (timestamp + número aleatorio)
function generarId() {
    return Date.now().toString() + Math.floor(Math.random() * 1000);
}

// Exportar las funciones
module.exports = {
    validarNombre,
    validarCorreo,
    generarId
};