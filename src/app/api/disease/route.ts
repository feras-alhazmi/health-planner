// Import necessary libraries
import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from 'zod';
import { diseaseSchema } from '@/lib/joi/schema/schema'; // Assuming Joi is used correctly

// Initialize Prisma service instance
const prisma = PrismaServices.instance;

// API route handling both GET and POST requests
export  async function GetAndPost(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return handleGet(req, res);
        case 'POST':
            return handlePost(req, res);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Handle GET requests
async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    try {
        
        const diseases = await prisma.disease.findMany();
        res.json(diseases);
    } catch (error) {
        console.error('Error fetching diseases:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Handle POST requests
async function handlePost(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = await req.body;
        diseaseSchema.parse(body);

        const { name, medicalHistoryId } = body;
        const newDisease = await prisma.disease.create({
            data: {
                diseaseName: name,
            },
        });

        if (medicalHistoryId) {
            const history = await prisma.medicalHistoryDisease.create({
                data: {
                    medicalHistoryId,
                    diseaseId: newDisease.Id,
                },
            });

            console.log('History created:', history);
        }

        res.json(newDisease);
    } catch (error) {
        console.error('Error creating disease:', error);
        if (error instanceof z.ZodError) {
            res.status(400).json({
                error: 'Validation error',
                details: error.errors.map(e => e.path.join('.') + ': ' + e.message),
            });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
