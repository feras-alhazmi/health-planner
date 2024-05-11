// Import necessary libraries
import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { diseaseSchema } from '@/lib/joi/schema/schema'; // Assuming Joi is used correctly
import { NextRequest, NextResponse } from 'next/server';
import { MeasurementType } from '@prisma/client';
import { GetUserP } from '@/core/profileCore/BEprofileHandler';

// Initialize Prisma service instance
const prisma = PrismaServices.instance;

export async function POST(request: NextRequest) {

    const { Id }: GetUserP = await request.json();
    try {
        //remove code

        // await prisma.medicalHistory.create({
        //     data: {
        //         historyName: 'Routine Checkup',
        //         userId: Id,
        //         diseases: {
        //             create: [{
        //                 diseaseName: 'Hypertension',
        //                 description: 'Manage blood pressure levels',
        //             }]
        //         }
        //     }
        // });

        //remove code


        const diseases = await prisma.disease.findMany({
            where: {
                histories: {
                    some: {
                        userId: Id // Replace 'specificUserId' with the actual user ID you're looking for
                    }
                }
            }
        })
        return NextResponse.json(diseases);
    } catch (error) {
        console.error('Error fetching diseases:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


// export async function POST(request: NextRequest) {

//     const body = await request.json();
//     const validation = diseaseSchema.safeParse(body);
//     if (!validation.success)
//         return NextResponse.json(validation.error.format(), { status: 400 });

//     const { diseaseName, medicalHistoryId } = body;
//     const newDisease = await prisma.disease.create({
//         data: {
//             diseaseName: diseaseName,
//         },
//     });

//     if (medicalHistoryId) {
//         const history = await prisma.medicalHistoryDisease.create({
//             data: {
//                 medicalHistoryId,
//                 diseaseId: newDisease.Id,
//             },
//         });


//     }
//     return NextResponse.json(newDisease, { status: 201 });

// }
