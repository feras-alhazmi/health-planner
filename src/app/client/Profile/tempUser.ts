// import MedicationTable, {
//     StatusKey,
// } from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed


export interface TempUser {
    contactInfoData: ContactInfoData;
    statCardsData: StatCardsData[];
    timelineData: TimelineData[];
    medicationsData: MedicationsData[];
    medicalHistoryEntries: MedicalHistoryEntries[]
}

interface ContactInfoData {
    name: string;
    age: number;
    gender: string;
    address: string;
    job: string;
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