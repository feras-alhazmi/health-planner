// Import necessary modules
import { medicalHistorySchema } from '@/lib/joi/schema/schema';
import PrismaServices from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

let prisma = PrismaServices.instance;
export const config = {
  api: {
    bodyParser: true,
  },
}

// Route handler for fetching all medical histories
export async function GET(req: NextApiRequest) {
  try {
    const medicalHistories = await prisma.medicalHistory.findMany();
    return NextResponse.json(medicalHistories);
  } catch (error) {
    console.error('Error fetching medical histories:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Route handler for creating a new medical history
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body against zod schema
    const validatedData = medicalHistorySchema.parse(body);
    const { historyName } = body;

    // Create a new medical history in the database
    const newMedicalHistory = await prisma.medicalHistory.create({
      data: {
        historyName,
        userId: "1312312"
      },
    });

    // Send success response with the newly created medical history
    return NextResponse.json(newMedicalHistory);
  } catch (error) {
    console.error('Error creating medical history:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation error',
        details: error.errors.map((error) => error.path.join('.') + ': ' + error.message),
      }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
