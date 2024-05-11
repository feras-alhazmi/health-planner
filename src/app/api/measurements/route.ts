// Import necessary modules and schema

import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { measurementSchema } from '@/lib/joi/schema/schema';
import { NextRequest, NextResponse } from 'next/server';
import { GetUserP } from "@/core/profileCore/BEprofileHandler";
import { MeasurementType } from "@prisma/client";

const prisma = PrismaServices.instance;

// Unified API handler function

export async function POST(request: NextRequest) {

  const { Id }: GetUserP = await request.json();
  try {
    //remove code


    // await prisma.userMeasurements.create({
    //   data: {
    //     userId: Id,

    //     measurements: {
    //       create: [
    //         {
    //           name: "BMI",
    //           icon: "🍎",
    //           measurementType: MeasurementType.BMI,
    //           measurementValue: 100,
    //           measurementUnit: "%",
    //           measuredOn: new Date(),
    //         },
    //         {
    //           name: "Weight",
    //           icon: "⚖️",
    //           measurementType: MeasurementType.weight,
    //           measurementValue: 70,
    //           measurementUnit: "kg",
    //           measuredOn: new Date(),
    //         },
    //         {
    //           name: "Height",
    //           icon: "📏",
    //           measurementType: MeasurementType.blood_pressure_systolic,
    //           measurementValue: 175,
    //           measurementUnit: "cm",
    //           measuredOn: new Date(),
    //         },
    //         {
    //           name: "Fat Percentage",
    //           icon: "💧",
    //           measurementType: MeasurementType.blood_pressure_diastolic,
    //           measurementValue: 15,
    //           measurementUnit: "%",
    //           measuredOn: new Date(),
    //         }
    //       ]
    //     }
    //   }
    // });

    //remove code



    const measurement = await prisma.measurements.findMany({
      where: {
        UserMeasurements: {
          userId: Id // Replace 'specificUserId' with the actual user ID you're looking for
        }
      }
    })
    return NextResponse.json(measurement);
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


// export async function POST(request: NextRequest) {


//   const body = await request.json();
//   const validation =   measurementSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.format(), { status: 400 });
//     const { userId, ...measurementData } = body;

//     const userMeasurement = await prisma.userMeasurements.upsert({
//       where: { userId: userId },
//       update: {},
//       create: { userId: userId },
//     });

//   return NextResponse.json(userMeasurement, { status: 201 });
// }


