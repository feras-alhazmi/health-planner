import { Gender, Role, Status } from "@prisma/client";
import { date } from "zod";


export interface TempUser {
    contactInfoData: ContactInfoData;
    statCardsData: StatCardsData[];
    UserMedications: UserMedications;
    medicalHistory: MedicalHistory;
    events: Event;

}

interface ContactInfoData {
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

interface MedicalHistory {
    historyName: string;
    diseases: Disease[];
}

interface Disease {
    diseaseName: string;
    description: string;
}

interface Medications {
    medicationName: string;
    status: Status;
    dosage: string;
    frequency: string;
    prescribingPhysician: string; // Foreign key for user; need to define a user model
    startDate: Date;
    endDate: Date;
}

interface UserMedications {
    medications: Medications[];
}
interface StatCardsData {
    title: string;
    value: string;
    icon: string;
}
interface Event {
    date: string;
    name: string;
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