
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config'

const connectionString = process.env.DATABASE_URL;

// Create a new pool using the connection string
const pool = new Pool({ connectionString });

// Create the PrismaPg adapter
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
})

const connectDB = async () => {
  try {
    await prisma.$connect()
    console.log("DB Connected via Prisma");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1)
  }
}

const disconnectDB = async () => {
    await prisma.$disconnect()
}

export {prisma, connectDB, disconnectDB}