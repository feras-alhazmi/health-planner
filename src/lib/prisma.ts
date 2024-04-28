const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

prisma.$connect().then(() => {
    console.log("DB CONNECTED");
}).catch((err: any) => {
    console.log("Error occured. " + err?.message);
})

export default prisma;
