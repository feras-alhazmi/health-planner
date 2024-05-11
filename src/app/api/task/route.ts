import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { diseaseSchema } from '@/lib/joi/schema/schema'; // Assuming Joi is used correctly
import { NextRequest, NextResponse } from 'next/server';
import { taskSchema } from '@/app/validationSchema';

// Initialize Prisma service instance
const prisma = PrismaServices.instance;


export async function POST(request: NextRequest) {


    const body = await request.json();
    const validation =   taskSchema.safeParse(body);
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });
  
      
      const newTask = await prisma.task.create({
          data: body,
      });

      
  return NextResponse.json(newTask, { status: 201 });

}