// Import necessary modules
import PrismaServices from "../Prisma-Services";
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { NextResponse, NextRequest } from 'next/server';
import { useAuthStore } from '@/core/auth/store/Auth-Store';

// Initialize Prisma service instance
let prisma = PrismaServices.instance;

export async function GET(req: NextRequest) {
    // Extract the medical history ID from the URL
    const id = req.url?.split('/').slice(-1).pop();
    const userData = useAuthStore(state => state.userData);
    try {
        // Fetch the medical history with the specified ID from the database
        const userMedications = await prisma.userMedications.findUnique({
            where: {
                userId: userData?.userId
            },
            include: {
                medications: true
            },
        });

        // Send success response with the fetched medical history
        return NextResponse.json(userMedications);
    } catch (error) {
        // Handle database errors
        console.error('Error fetching medical history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
