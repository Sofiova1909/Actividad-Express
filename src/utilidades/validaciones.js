// Validar que el nombre tenga mínimo 3 letras
function validarNombre(nombre) {
  if (typeof nombre !== "string") {
    return false;
  }

  const nombreLimpio = nombre.trim();

  // Solo permite letras y espacios, mínimo 3 caracteres
  const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;

  return expresion.test(nombreLimpio);
}

// Validar correo electrónico mediante expresión regular
function validarCorreo(correo) {
  if (typeof correo !== "string") {
    return false;
  }

  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return expresion.test(correo.trim());
}

// Generar un ID automático
function generarId() {
  return Date.now();
}

// Exportar las funciones
module.exports = {
  validarNombre,
  validarCorreo,
  generarId
};