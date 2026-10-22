# Comandos para iniciar ORM Prima

npm install prisma@7 --save-dev

# Instalar el cliente de prisma (-D)
npm install @prisma/client@7 --save-dev

# Instalar el adaptador para postgres
npm install -D @prisma/adapter-pg@7

# Libreria para tsx y poder seguir escribinedo archivos js con
# la forma de importacion commojs (ES Module)
npm install -d prisma@7 tsx

# Tenemos todas las herramientas
# Inicializar prisma con un proveedor
npx prisma init --datasource-provider postgresql

# Crear las tablas y generar el cliente
npx prisma migrate dev --name inicio

npx prisma generate


