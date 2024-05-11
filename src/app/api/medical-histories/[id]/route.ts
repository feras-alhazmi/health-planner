// Import necessary modules
import { diseaseSchema, medicalHistorySchema } from '@/lib/joi/schema/schema';
import PrismaServices from "../../Prisma-Services";
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { useAuthStore } from '@/core/auth/store/Auth-Store';

let prisma = PrismaServices.instance;
// Import necessary modules
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
      // include: {
      //   medicalHistoryDiseases: {
      //     select: {
      //       disease: {
      //         select: {
      //           diseaseName: true
      //         }
      //       }
      //     }
      //   }

      // },
    });

    // Send success response with the fetched medical history
    return NextResponse.json(medicalHistory);
  } catch (error) {
    // Handle database errors
    console.error('Error fetching medical history:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Extract the medical history ID from the URL
    const id = req.url?.split('/').slice(-1).pop();

    // Parse request body against zod schema
    const body = await req.json();
    medicalHistorySchema.parse(body);

    // Extract name from request body
    const { historyName } = body;

    // Update the medical history with the specified ID in the database
    const updatedMedicalHistory = await prisma.medicalHistory.update({
      where: { Id: id as string },
      data: { historyName }
    });

    // Send success response with the updated medical history
    return NextResponse.json(updatedMedicalHistory);
  } catch (error) {
    // Handle validation errors and database errors
    console.error('Error updating medical history:', error);
    if (error instanceof z.ZodError) {
      // Send validation error response
      return NextResponse.json({
        error: 'Validation error',
        details: error.errors.map((error) => error.path.join('.') + ': ' + error.message),
      }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    // Extract the medical history ID from the URL
    const id = req.url?.split('/').slice(-1).pop();

    // Delete the medical history with the specified ID from the database
    await prisma.medicalHistory.delete({
      where: { Id: id as string }
    });

    // Send success response
    return NextResponse.json({ message: 'Medical history deleted' });
  } catch (error) {
    // Handle database errors
    console.error('Error deleting medical history:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
