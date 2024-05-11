// Import necessary modules
import { medicalHistorySchema } from '@/lib/joi/schema/schema';
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
        const medicalHistory = await prisma.medicalHistory.findUnique({
            where: {
                userId: userData?.userId
            },
            include: {
                diseases: true

            },
        });

        // Send success response with the fetched medical history
        return NextResponse.json(medicalHistory);
    } catch (error) {
        // Handle database errors
        console.error('Error fetching medical history:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {


    const body = await request.json();
    const validation = medicalHistorySchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 });

    const newMedicalHistory = await prisma.medicalHistory.create({ data: body });

    return NextResponse.json(newMedicalHistory, { status: 201 });
}
// Route handler for fetching all medical histories
// async function handleGet(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const medicalHistories = await prisma.medicalHistory.findMany();
//         res.json(medicalHistories);
//     } catch (error) {
//         console.error('Error fetching medical histories:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// Route handler for creating a new medical history
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = JSON.parse(req.body); // Ensure the body is parsed correctly

        // Validate request body against zod schema
        const validatedData = medicalHistorySchema.parse(body);
        const { historyName, userId } = validatedData;

        // Create a new medical history in the database
        const newMedicalHistory = await prisma.medicalHistory.create({
            data: {
                historyName,
                userId,
            },
        });

        // Send success response with the newly created medical history
        res.status(201).json(newMedicalHistory);
    } catch (error) {
        console.error('Error creating medical history:', error);
        if (error instanceof z.ZodError) {
            res.status(400).json({
                error: 'Validation error',
                details: error.errors.map(e => `${e.path.join('.')} : ${e.message}`),
            });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
