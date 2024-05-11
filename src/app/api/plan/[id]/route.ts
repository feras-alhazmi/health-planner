

import { planSchema } from "@/app/validationSchema";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import { NextRequest, NextResponse } from "next/server";
import PrismaServices from "../../Prisma-Services";
const prisma = PrismaServices.instance;

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

  const body = await request.json();
  const validation = planSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), {
      status: 400,
    });

 

  

  const plan = await prisma.plan.findUnique({
    where: { plan_id: params.id },
  });
  if (!plan)
    return NextResponse.json(
      { error: "Invalid plan" },
      { status: 404 }
    );

  const updatedPlan = await prisma.plan.update({
    where: { plan_id: plan.plan_id },
    data: body,
  });

  return NextResponse.json(updatedPlan);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

   

  const plan = await prisma.plan.findUnique({
    where: { plan_id: params.id },
  });

  if (!plan)
    return NextResponse.json(
      { error: "Invalid plan" },
      { status: 404 }
    );

  await prisma.plan.delete({
    where: { plan_id: plan.plan_id },
  });

  return NextResponse.json({});
}