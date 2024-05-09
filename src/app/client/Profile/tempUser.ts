import { Gender, Role, Status } from "@prisma/client";
import { date } from "zod";


export interface TempUser {
    contactInfoData: ContactInfoData;
    statCardsData: StatCardsData[];
    UserMedications: UserMedications;
    medicalHistory: MedicalHistory;
    events: Event;

}

export interface ContactInfoData {
    firstname: string;
    lastname: string;
    phone: string;
    dateOfBirth: Date
    bio: string;
    gender: Gender;
    diagnosis: string;
    address: string;
    healthBarriers: string[];
    email: string;
    role: Role;
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
    date: string;
    name: string;
}
