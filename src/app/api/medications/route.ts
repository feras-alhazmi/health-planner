// Import necessary modules and utilities
import { NextApiRequest, NextApiResponse } from 'next';
import PrismaServices from "../Prisma-Services";
import { z } from "zod";
import { medicationSchema } from "@/lib/joi/schema/schema";

const prisma = PrismaServices.instance;

// Unified handler for all medication-related requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    case 'POST':
      return handlePost(req, res);
    case 'PUT':
      return handlePut(req, res);
    case 'DELETE':
      return handleDelete(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const medications = await prisma.medications.findMany();
    res.json(medications);
  } catch (error) {
    console.error('Error fetching medications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = JSON.parse(req.body); // Make sure to parse the JSON body
    medicationSchema.parse(body);
    const newMedication = await prisma.medications.create({ data: body });
    res.status(201).json(newMedication);
  } catch (error) {
    console.error('Error creating medication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const updateData = JSON.parse(req.body);
    const updatedMedication = await prisma.medications.update({
      where: { Id: id as string },
      data: updateData
    });
    res.json(updatedMedication);
  } catch (error) {
    console.error('Error updating medication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    await prisma.medications.delete({ where: { Id: id as string } });
    res.json({ message: 'Medication deleted' });
  } catch (error) {
    console.error('Error deleting medication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
