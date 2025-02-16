import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const globalForPrisma = global as unknown as {
    prisma:typeof prisma
};

if(process.env.ENVIRONMENT !== "PRODUCTION"){
    globalForPrisma.prisma = prisma
}

export default globalForPrisma.prisma

