require("dotenv").config()
const {PrismaClient} = require("../generated/prisma/client")

const {PrismaPg} = require("@prisma/adapter-pg")

//instanciar el adaptador
const adaptador = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const ormPrisma = new PrismaClient({adapter: adaptador})

module.exports = ormPrisma

