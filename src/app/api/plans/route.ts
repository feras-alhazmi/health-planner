
import PrismaServices from "../Prisma-Services";

import { NextRequest, NextResponse } from 'next/server';

// Initialize Prisma service instance
const prisma = PrismaServices.instance;


    export async function GET(request: NextRequest) {

        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');
      
        if (!userId) {
          return new NextResponse(JSON.stringify({ error: 'User ID is required' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            }
          });
        }
        const tasksFromDb = await prisma.plan.findMany({
            where: { owner_id: userId },
            orderBy: {
                createdAt: "asc" // or 'desc'
              }
         

        });

        
    return NextResponse.json(tasksFromDb, { status: 201 });

    }