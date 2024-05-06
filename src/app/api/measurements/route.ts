// Import necessary modules and schema
import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { measurementSchema } from '@/lib/joi/schema/schema';

const prisma = PrismaServices.instance;

// Unified API handler function
export  async function GetAndPost(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGetMeasurements(req, res);
    case 'POST':
      return handlePostMeasurements(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Handle GET requests
async function handleGetMeasurements(req: NextApiRequest, res: NextApiResponse) {
  try {
    const measurements = await prisma.userMeasurements.findMany({
      include: {
        measurements: true, // Assuming this is correct according to your Prisma schema
      }
    });
    res.json(measurements);
  } catch (error) {
    console.error('Error fetching measurements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Handle POST requests
async function handlePostMeasurements(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body); 

   
    measurementSchema.parse(body);

    const { userId, ...measurementData } = body;

    if (!userId) {
      return res.status(400).json({ error: 'Missing user ID' });
    }

    // Find or create user measurements
    const userMeasurement = await prisma.userMeasurements.upsert({
      where: { userId: userId },
      update: {},
      create: { userId: userId },
    });

    // Create new measurement
    const newMeasurement = await prisma.measurements.create({
      data: {
        ...measurementData,
        userMeasurementsId: userMeasurement.Id, 
        measuredOn: new Date(measurementData.measuredOn)
      },
    });

    res.status(201).json(newMeasurement);
  } catch (error) {
    console.error('Error creating measurement:', error);
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
