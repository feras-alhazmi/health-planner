import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string().min(1,"Inter the title").max(255),
    description: z.string({required_error:"You have to write a description "}).min(10," write a full sentence")
});