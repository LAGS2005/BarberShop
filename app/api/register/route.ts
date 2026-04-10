export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, phone } = body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        telefone: phone,
        password: await bcrypt.hash(password, 10),
        role: "client",
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar usuário" }, { status: 500 });
  }
}