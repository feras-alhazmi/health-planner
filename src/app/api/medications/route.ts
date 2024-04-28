import prisma from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  try {
    const medications = await prisma.medications.findMany();
    return NextResponse.json(medications);
  } catch (error) {
    console.error('Error fetching medications:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest) {
  try {
    const { medicationName, status, dosage, frequency, prescribingPhysician, startDate, endDate } = req.body;

    const newMedication = await prisma.medications.create({
      data: {
        medicationName,
        status,
        dosage,
        frequency,
        prescribingPhysician,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json(newMedication);
  } catch (error) {
    console.error('Error creating medication:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextApiRequest) {
  const { id } = req.query;
  try {
    const { medicationName, status, dosage, frequency, prescribingPhysician, startDate, endDate } = req.body;

    const updatedMedication = await prisma.medications.update({
      where: {
        Id: id as string,
      },
      data: {
        medicationName,
        status,
        dosage,
        frequency,
        prescribingPhysician,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
      },
    });

    return NextResponse.json(updatedMedication);
  } catch (error) {
    console.error('Error updating medication:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextApiRequest) {
  const { id } = req.query;
  try {
    await prisma.medications.delete({
      where: {
        Id: id as string,
      },
    });

    return NextResponse.json({ message: 'Medication deleted' });
  } catch (error) {
    console.error('Error deleting medication:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
