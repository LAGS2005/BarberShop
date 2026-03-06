import { PrismaClient } from '@prisma/client'

// Aqui podemos passar o adapter diretamente
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.["postgresql://neondb_owner:npg_nik5tdL6Omcl@ep-weathered-bird-aixojobe-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"],
    },
  },
})

export default prisma