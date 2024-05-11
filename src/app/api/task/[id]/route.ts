

import { taskSchema } from "@/app/validationSchema";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import { NextRequest, NextResponse } from "next/server";
import PrismaServices from "../../Prisma-Services";
const prisma = PrismaServices.instance;

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const body = await request.json();



  const task = await prisma.task.findUnique({
    where: { task_id: params.id },
  });
  if (!task)
    return NextResponse.json(
      { error: "Invalid task" },
      { status: 404 }
    );

  const updatedTask = await prisma.task.update({
    where: { task_id: task.task_id },
    data: body,
  });

  return NextResponse.json(updatedTask);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {


  const task = await prisma.task.findUnique({
    where: { task_id: params.id },
  });

  if (!task)
    return NextResponse.json(
      { error: "Invalid task" },
      { status: 404 }
    );

  await prisma.task.delete({
    where: { task_id: task.task_id },
  });

  return NextResponse.json({});
}