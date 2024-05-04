// pages/api/medical-histories.ts
import PrismaServices from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = PrismaServices.instance
// Define zod schema for validating request body
const medicalHistorySchema = z.object({
  history_name: z.string(),
  description: z.string().optional()
});

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log('Medical histories API');
  
//   if (req.method === 'GET') {
//     return GET(req, res);
//   } else if (req.method === 'POST') {
//     return POST(req);
//   } else if (req.method === 'PUT') {
//     return PUT(req);
//   } else if (req.method === 'DELETE') {
//     return DELETE(req);
//   } else {
//     return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
//   }
// }

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Fetching medical histories');

    const medicalHistories = await prisma.medicalHistory.findMany();
    return NextResponse.json(medicalHistories);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' });
  }
}

export async function POST(req: NextApiRequest) {
  // Validate request body against zod schema
  try {
    const validatedData = medicalHistorySchema.parse(req.body);
    const { history_name, description } = validatedData;

    // Create a new medical history
    const newMedicalHistory = await prisma.medicalHistory.create({
      data: {
        historyName: history_name,
        description: description || '',
        userId: '1' // Hardcoded for now, should be fetched from the session
      }
    });

    return NextResponse.json(newMedicalHistory);
  } catch (error) {
    console.error('Error creating medical history:', error);
    if (error instanceof z.ZodError) {
      // Zod validation failed
      return NextResponse.json({ error: 'Validation error', details: error.errors }, { status: 400 });
    } else {
      // Other error
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
}

export async function PUT(req: NextApiRequest) {
  const { id } = req.query;
  // Validate request body against zod schema
  try {
    const validatedData = medicalHistorySchema.parse(req.body);
    const { history_name, description } = validatedData;

    // Update the medical history
    const updatedMedicalHistory = await prisma.medicalHistory.update({
      where: {
        Id: id as string,
      },
      data: {
        historyName: history_name,
        description: description || '',
      }
    });

    return NextResponse.json(updatedMedicalHistory);
  } catch (error) {
    console.error('Error updating medical history:', error);
    if (error instanceof z.ZodError) {
      // Zod validation failed
      return NextResponse.json({ error: 'Validation error', details: error.errors }, { status: 400 });
    } else {
      // Other error
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
}


export async function DELETE(req: NextApiRequest) {
  const { id } = req.query;
  try {
    // Delete the medical history
    await prisma.medicalHistory.delete({
      where: {
        Id: id as string,
      }
    })

    return NextResponse.json({ message: 'Medical history deleted' });
  } catch (error) {
    console.error('Error deleting medical history:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
