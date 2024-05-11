import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string().min(1,"Inter the title").max(255),
    description: z.string({required_error:"You have to write a description "})
});

export const planSchema = z.object({
    name: z.string().min(1,"Inter the title").max(255),
});