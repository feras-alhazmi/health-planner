// Import necessary modules and utilities
import { NextRequest, NextResponse } from "next/server";
import PrismaServices from "../Prisma-Services";
import { z } from "zod";
import { medicationSchema } from "@/lib/joi/schema/schema";
import { TempUser } from "@/app/client/Profile/tempUser";
import { Language, Status } from "@prisma/client";

const prisma = PrismaServices.instance;

// Unified handler for all medication-related requests


export async function POST(request: NextRequest) {
    const tempUser: TempUser = await request.json();
    //     const validation =   medicationSchema.safeParse(body);
    //   if (!validation.success)
    //     return NextResponse.json(validation.error.format(), { status: 400 });

    const user = await prisma.user.create({
        data: {
            firstname: tempUser.contactInfoData.firstname,
            lastname: tempUser.contactInfoData.lastname,
            phone: tempUser.contactInfoData.phone,
            dateOfBirth: tempUser.contactInfoData.dateOfBirth,
            bio: tempUser.contactInfoData.bio,
            gender: tempUser.contactInfoData.gender,
            diagnosis: tempUser.contactInfoData.diagnosis,
            address: tempUser.contactInfoData.address,
            healthBarriers: tempUser.contactInfoData.healthBarriers,
            avatarUrl: "http://example.com/avatar.jpg",
            timezone: "UTC",
            language: Language.EN,
            year: 1990,
            roles: tempUser.contactInfoData.role,
            email: tempUser.contactInfoData.email,
            lastActiveAt: new Date(),
            medicalHistory: {
                create: {
                    historyName: tempUser.medicalHistory.historyName,
                    diseases: {
                        create: tempUser.medicalHistory.diseases.map(d => ({
                            diseaseName: d.diseaseName,
                            description: d.description
                        }))
                    }
                }
            },
            userMedications: {
                create: {
                    medications: {
                        create: tempUser.UserMedications.medications.map(m => ({
                            medicationName: m.medicationName,
                            status: m.status,
                            dosage: m.dosage,
                            frequency: m.frequency,
                            prescribingPhysician: m.prescribingPhysician,
                            startDate: m.startDate,
                            endDate: m.endDate
                        }))
                    }
                }
            },
            // userMeasurements: {
            //     create: {
            //         measurements: {
            //             create: {
            //                 name: "Weight",
            //                 measurementType: MeasurementType.weight,
            //                 measurementValue: 180,
            //                 measurementUnit: "kg",
            //                 measuredOn: new Date()
            //             }
            //         }
            //     }
            // },
            Event: {
                create: {
                    date: tempUser.events.date,
                    name: tempUser.events.name
                }
            }
        },
        include: {
            medicalHistory: true,
            userMedications: {
                include: {
                    medications: true
                }
            },
            userMeasurements: {
                include: {
                    measurements: true
                }
            },
            Event: true
        }
    });

    return NextResponse.json(user, { status: 201 });
}