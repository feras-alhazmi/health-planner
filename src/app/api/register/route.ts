import { NextRequest, NextResponse } from "next/server";
import { genSaltSync, hashSync } from "bcrypt-ts";
import PrismaServices from "../Prisma-Services";
const prisma = PrismaServices.instance;
export async function POST(req: NextRequest) {
  const { email, password,fullName } = await req.json();
  try {
    const isRegistered = await prisma.authUser.findUnique({
      where: {
        email: email,
      },
    });
    if (isRegistered) {
      return new NextResponse(
        JSON.stringify({ message: "Email already registered" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);

    const result = await prisma.authUser.create({
      data: {
        email: email,
        password: hashedPassword,
        salt: salt,
      },
    });
    const userresult = await prisma.user.create({

      data: {
      email:email,
      fullName:fullName,
      address:"",
    authUserId:result.Id
      },
    })
    return new NextResponse(JSON.stringify({ message: {result,userresult} }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
