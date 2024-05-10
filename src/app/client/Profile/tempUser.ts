// import MedicationTable, {
//     StatusKey,
// } from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed

import { Gender, Role, Status } from "@prisma/client";


export interface TempUser {
    contactInfoData: ContactInfoData;
    statCardsData: StatCardsData[];
    UserMedications: UserMedications;
    medicalHistory: MedicalHistory;
    events: Event;

}

export interface ContactInfoData {
    name: string;
    dob: Date;
    gender: Gender;
    address: string;
    job: Role;
    phone: string;
    diagnosis: string;
    healthBarriers: string[];
    email: string;
}

export interface MedicalHistory {
    historyName: string;
    diseases: Disease[];
}

export interface Disease {
    diseaseName: string;
    description: string;
}

export interface Medications {
    medicationName: string;
    status: Status;
    dosage: string;
    frequency: string;
    prescribingPhysician: string; // Foreign key for user; need to define a user model
    startDate: Date;
    endDate: Date;
}

export interface UserMedications {
    medications: Medications[];
}
export interface StatCardsData {
    title: string;
    value: string;
    icon: string;
}
export interface Event {
    date: Date;
    name: string;
}
