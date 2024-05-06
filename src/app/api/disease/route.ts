import { diseaseSchema } from '@/lib/joi/schema/schema';
import PrismaServices from "../Prisma-Services";
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export default {
    config: {
        api: {
            bodyParser: true,
        },
    },
};

const prisma = PrismaServices.instance
export async function GET(req: NextApiRequest) {
  try {
    const diseases = await prisma.disease.findMany();
    return NextResponse.json(diseases);
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let body = await req.json()

    diseaseSchema.parse(body);

    const {
      name,
      medicalHistoryId,
    } = body;

    const newDisease = await prisma.disease.create({
      data: {
        diseaseName: name,
      },
    });

    if (medicalHistoryId) {
      let history = await prisma.medicalHistoryDisease.create({
        data: {
          medicalHistoryId,
          diseaseId: newDisease.Id,
        },
      });

      console.log('history', history);
      
    }

    return NextResponse.json(newDisease);
  } catch (error) {
    console.error('Error creating disease:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation error',
        details: error.errors.map((error) => error.path.join('.') + ': ' + error.message),
      }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

