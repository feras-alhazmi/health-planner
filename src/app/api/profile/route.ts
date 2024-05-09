// Import necessary modules and utilities
import { NextRequest, NextResponse } from "next/server";
import PrismaServices from "../Prisma-Services";
import { z } from "zod";
import { medicationSchema } from "@/lib/joi/schema/schema";
import { TempUser } from "@/app/client/Profile/tempUser";
import { Language, Status } from "@prisma/client";
import { use } from "react";

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
export async function GET(request: NextRequest) {
    // Extract the medical history ID from the URL
    const email: string = await request.json();

    try {
        // Fetch the medical history with the specified ID from the database
        const user = await prisma.user.findUnique({
            where: {
                email: email
            },
            include: {
                medicalHistory: true,  // Assuming the relation is directly under User
                userMedications: {
                    include: {
                        medications: true  // This nested include is assuming you want to get the details of the medications under userMedications
                    }
                },
                Event: true  // Assuming the relation is directly under User
            }
        });


        // Send success response with the fetched medical history
        if (user && user.userMedications && user.medicalHistory && user.Event) {
            const tempUser: TempUser = {
                contactInfoData: {
                    firstname: user.firstname,
                    lastname: user.lastname ?? "lastname",
                    phone: user.phone,
                    dateOfBirth: user.dateOfBirth,
                    bio: user.bio ?? "bio",
                    gender: user.gender,
                    diagnosis: user.diagnosis ?? "diagnosis",
                    address: user.address,
                    healthBarriers: user.healthBarriers,
                    email: user.email,
                    role: user.roles
                },
                statCardsData: [
                    { title: "Patients", value: "92", icon: "👥" },
                    { title: "Weight", value: "80 kg", icon: "⚖️" },
                    { title: "Height", value: "180 cm", icon: "📏" },
                    { title: "Blood Type", value: "O+", icon: "💉" }
                ],
                UserMedications: {
                    medications: user.userMedications.medications.map(m => ({
                        medicationName: m.medicationName,
                        status: m.status,
                        dosage: m.dosage,
                        frequency: m.frequency,
                        prescribingPhysician: m.prescribingPhysician,
                        startDate: m.startDate,
                        endDate: new Date() //m.endDate ?? null
                    }))
                },
                medicalHistory: {
                    historyName: user.medicalHistory.historyName,
                    diseases: //user.medicalHistory.Id.map(m => ({
                        [{
                            diseaseName: "Hypertension",
                            description: "High blood pressure, controlled through medication."
                        }]
                    // }))


                },
                events: {
                    date: user.Event.date.toISOString(),
                    name: user.Event.name
                }
            };
        }
        return NextResponse.json(user);
    } catch (error) {
        // Handle database errors
        console.error('Error fetching user:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}