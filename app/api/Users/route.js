import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    // Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check duplicate email
    const duplicate = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (duplicate) {
      return NextResponse.json(
        { message: "Duplicate Email." },
        { status: 409 }
      );
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    await prisma.user.create({
      data: userData,
    });
    return NextResponse.json({ message: "User Created." }, { status: 201 });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ message: "Error: " + err }, { status: 500 });
  }
}
