import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { diseaseSchema } from '@/lib/joi/schema/schema'; // Assuming Joi is used correctly
import { NextRequest, NextResponse } from 'next/server';
import { GetUserP } from '@/core/profileCore/BEprofileHandler';

// Initialize Prisma service instance
const prisma = PrismaServices.instance;

export async function POST(request: NextRequest) {

    const { Id }: GetUserP = await request.json();
    try {
        const events = await prisma.event.findMany({
            where: {
                userId: Id
            }

        })
        return NextResponse.json(events);
    } catch (error) {
        console.error('Error fetching diseases:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}