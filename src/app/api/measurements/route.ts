import PrismaServices from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

const prisma = PrismaServices.instance
export async function GET(req: NextApiRequest) {
  try {
    const measurements = await prisma.measurements.findMany();
    return NextResponse.json(measurements);
  } catch (error) {
    console.error('Error fetching measurements:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest) {
  try {
    const { name, measurementType, measurementValue, measurementUnit, measuredOn } = req.body;

    const newMeasurement = await prisma.measurements.create({
      data: {
        name,
        measurementType,
        measurementValue,
        measurementUnit,
        measuredOn: new Date(measuredOn),
        userMeasurementsID: "32423423423"
      },
    });

    return NextResponse.json(newMeasurement);
  } catch (error) {
    console.error('Error creating measurement:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextApiRequest) {
  const { id } = req.query;
  try {
    const { name, measurementType, measurementValue, measurementUnit, measuredOn } = req.body;

    const updatedMeasurement = await prisma.measurements.update({
      where: {
        Id: id as string,
      },
      data: {
        name,
        measurementType,
        measurementValue,
        measurementUnit,
        measuredOn: new Date(measuredOn),
      },
    });

    return NextResponse.json(updatedMeasurement);
  } catch (error) {
    console.error('Error updating measurement:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextApiRequest) {
  const { id } = req.query;
  try {
    await prisma.measurements.delete({
      where: {
        Id: id as string,
      },
    });

    return NextResponse.json({ message: 'Measurement deleted' });
  } catch (error) {
    console.error('Error deleting measurement:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
