import prisma from '@/lib/prisma';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  try {
    const diseases = await prisma.disease.findMany();
    return NextResponse.json(diseases);
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest) {
  try {
    const { diseaseName } = req.body;

    const newDisease = await prisma.disease.create({
      data: {
        diseaseName,
      },
    });

    return NextResponse.json(newDisease);
  } catch (error) {
    console.error('Error creating disease:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextApiRequest) {
  const { id } = req.query;
  try {
    const { diseaseName } = req.body;

    const updatedDisease = await prisma.disease.update({
      where: {
        Id: id as string,
      },
      data: {
        diseaseName,
      },
    });

    return NextResponse.json(updatedDisease);
  } catch (error) {
    console.error('Error updating disease:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextApiRequest) {
  const { id } = req.query;
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
