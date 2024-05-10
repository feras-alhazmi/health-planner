// Import necessary libraries
import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { diseaseSchema } from '@/lib/joi/schema/schema'; // Assuming Joi is used correctly
import { NextRequest, NextResponse } from 'next/server';
import { MeasurementType } from '@prisma/client';

// Initialize Prisma service instance
const prisma = PrismaServices.instance;

export async function POST(request: NextRequest) {

    const userId = await request.json();
    try {
        //remove code
        await prisma.medicalHistory.create({
            data: {
                historyName: 'Routine Checkup',
                userId: userId,
                diseases: {
                    create: [{
                        diseaseName: 'Hypertension',
                        description: 'Manage blood pressure levels',
                    }]
                }
            }
        });

        await prisma.userMedications.create({
            data: {
                userId: userId,
                medications: {
                    create: [{
                        medicationName: 'Aspirin',
                        status: 'Active',
                        dosage: '100mg',
                        frequency: 'Daily',
                        prescribingPhysician: 'Dr. Jane Smith',
                        startDate: new Date(),
                        endDate: new Date()
                    }]
                }
            }
        });

        await prisma.event.create({
            data: {
                name: 'Follow-up Appointment',
                date: new Date(),
                userId: userId
            }
        });

        const userMeasurement = await prisma.userMeasurements.create({
            data: {
                userId: userId,

                measurements: {
                    create: {
                        name: "BMI",
                        icon: "🩸",
                        measurementType: MeasurementType.BMI,
                        measurementValue: 100,
                        measurementUnit: "%",
                        measuredOn: new Date(),
                    }
                }
            }
        });
        //remove code


        const diseases = await prisma.disease.findMany({
            where: {
                histories: {
                    some: {
                        userId: userId // Replace 'specificUserId' with the actual user ID you're looking for
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
