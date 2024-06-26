// Import necessary modules and utilities
import { NextRequest, NextResponse } from "next/server";
import PrismaServices from "../Prisma-Services";
import { z } from "zod";
import { medicationSchema } from "@/lib/joi/schema/schema";
import { GetUserP } from "@/core/profileCore/BEprofileHandler";

const prisma = PrismaServices.instance;

// Unified handler for all medication-related requests

export async function POST(request: NextRequest) {
  try {
    const { Id }: GetUserP = await request.json();

    // await prisma.userMedications.create({
    //   data: {
    //     userId: Id,
    //     medications: {
    //       create: [{
    //         medicationName: 'Aspirin',
    //         status: 'Active',
    //         dosage: '100mg',
    //         frequency: 'Daily',
    //         prescribingPhysician: 'Dr. Jane Smith',
    //         startDate: new Date(),
    //         endDate: new Date()
    //       }]
    //     }
    //   }
    // });

    const medications = await prisma.medications.findMany({
      where: {
        userMedications: {
          some: {
            userId: Id // Replace 'specificUserId' with the actual user ID you're looking for
          }
        }
      }
    })
    return NextResponse.json(medications);
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
// export async function POST(request: NextRequest) {


//   const body = await request.json();
//   const validation =   medicationSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });

//     const newMedication = await prisma.medications.create({ data: body });

//   return NextResponse.json(newMedication, { status: 201 });
// }

