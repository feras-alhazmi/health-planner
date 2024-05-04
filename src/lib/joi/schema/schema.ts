import { z } from "zod";

// make sure to use zod for validation otherwise return proper error response
const diseaseSchema = z.object({
    name: z.string().min(1, "Enter the name of the disease").max(255),
});

const medicationSchema = z.object({
    medicationName: z.string().min(1, "Enter the name of the medication").max(255),
    status: z.string().min(1, "Enter the status of the medication").max(255),
    dosage: z.string().min(1, "Enter the dosage of the medication").max(255),
    frequency: z.string().min(1, "Enter the frequency of the medication").max(255),
    prescribingPhysician: z.string().min(1, "Enter the prescribing physician").max(255),
    startDate: z.string().min(1, "Enter the start date of the medication"),
    endDate: z.string().optional(),
});

const medicalHistorySchema = z.object({
    history_name: z.string(),
    description: z.string().optional(),
});

export { diseaseSchema, medicationSchema, medicalHistorySchema };