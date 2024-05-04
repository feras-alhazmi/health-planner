// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

// prisma.$connect().then(() => {
//     console.log("DB CONNECTED");
// }).catch((err: any) => {
//     console.log("Error occured. " + err?.message);
// })

import { Prisma, PrismaClient } from "@prisma/client";
export default class PrismaServices {
    private constructor() { }
    private static _instance: PrismaClient | undefined;

    static get instance(): PrismaClient {
        if (!PrismaServices._instance) {
            PrismaServices._instance = new PrismaClient();
        }
        return PrismaServices._instance;
    }
}


// export default prisma;
