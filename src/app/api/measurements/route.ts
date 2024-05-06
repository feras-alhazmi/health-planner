import { measurementSchema } from '@/lib/joi/schema/schema';
import PrismaServices from "../Prisma-Services";
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = PrismaServices.instance;

export const config = {
  api: {
    bodyParser: true,
  },
}

export async function GET(req: NextApiRequest) {
  try {
    // Fetch measurements from the database
    const measurements = await prisma.userMeasurements.findMany({
      include: {
        measurements: {}
      }
    });

    return NextResponse.json(measurements);
  } catch (error) {
    console.error('Error fetching measurements:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    let body = await req.json();

    // Validate request body against schema
    measurementSchema.parse(body);

    // Extract necessary fields from the request body
    const { name, measurementType, measurementValue, measurementUnit, measuredOn, userMeasurementsID, userId } = body;

    if (!userId) return NextResponse.json({
      error: 'missing user id',
    }, { status: 400 })
    let userMeasurement = await prisma.userMeasurements.findFirst({
      where: {
        userId: userId
      }
    })

    if (!userMeasurement) {
      userMeasurement = await prisma.userMeasurements.create({
        data: {
          userId,
        }
      })
    }
    let newUserMeasurementsID = userMeasurement.Id;
    // Create new measurement in the database
    const newMeasurement = await prisma.measurements.create({
      data: {
        name,
        measurementType,
        measurementValue,
        measurementUnit,
        measuredOn: new Date(measuredOn),
        icon: '', // Add the missing 'icon' property
        userMeasurementsID: newUserMeasurementsID,
      },
    });

    return NextResponse.json(newMeasurement);
  } catch (error) {
    console.error('Error creating measurement:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation error',
        details: error.errors.map((error) => error.path.join('.') + ': ' + error.message),
      }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
