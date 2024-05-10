// import MedicationTable, {
//     StatusKey,
// } from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed

import { Gender, Role } from "@prisma/client";


export interface TempUser {
    contactInfoData: ContactInfoData;
    statCardsData: StatCardsData[];
    timelineData: TimelineData[];
    medicationsData: MedicationsData[];
    medicalHistoryEntries: MedicalHistoryEntries[]
}

export interface ContactInfoData {
    name: string;
    dob: Date;
    gender: Gender;
    address: string;
    job: Role;
    phone: string;
    email: string;
    diagnosis: string;
    healthBarriers: string[];
}

interface StatCardsData {
    title: string;
    value: string;
    icon: string;
}
interface TimelineData {
    date: string;
    event: string;
}
interface MedicationsData {
    name: string;
    status: string;
    dosage: string;
    frequency: string;
    prescribingPhysician: string;
    startDate: Date;
    endDate: Date;
}
interface MedicalHistoryEntries {
    condition: string;
    details: string;
}