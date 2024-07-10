import { db as prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const data = await request.json();

  const { name, email, password } = data;

  if (!name || !email || !password) {
    return NextResponse.json("Dados inválidos", { status: 400 });
  }

  const isUserExists = await prisma.user.findUnique({
    where: { email: email },
  });

  if (isUserExists) {
    return NextResponse.json("Registro já existe", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(user);
}
