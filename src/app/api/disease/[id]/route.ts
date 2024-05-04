import { diseaseSchema } from '@/lib/joi/schema/schema';
import PrismaServices from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = PrismaServices.instance
export async function GET(req: NextRequest) {
    let id = req.url?.split("/").slice(-1).pop()

    try {
      const diseases = await prisma.disease.findUnique({
        where: {
            Id: id
        }
      })
      return NextResponse.json(diseases);
    } catch (error) {
      console.error('Error fetching diseases:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }

  
export async function PUT(req: NextRequest) {
    let body = await req.json()

    // get id from url
    let id = req.url?.split("/").slice(-1).pop()

    try {
        diseaseSchema.parse(body)
        let { name } = body

        const updatedDisease = await prisma.disease.update({
            where: {
                Id: id as string,
            },
            data: {
                diseaseName: name,
            },
        });

        return NextResponse.json(updatedDisease);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: 'Validation error',
                details: error.errors.map((error) => error.path.join('.') + ': ' + error.message),
            }, { status: 400 });
        }

        console.error('Error updating disease:', error);
        return NextResponse.json({ error: 'Error While Updating Disease' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    let id = req.url?.split("/").slice(-1).pop()

    try {
        await prisma.disease.delete({
            where: {
                Id: id as string,
            },
        });

        return NextResponse.json({ message: 'Disease deleted' });
    } catch (error) {
        console.error('Error deleting disease:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}