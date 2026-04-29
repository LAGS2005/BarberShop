import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 🔍 Buscar usuário
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado" },
        { status: 404 }
      );
    }

    // 🔐 Validar senha
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return NextResponse.json(
        { error: "Senha inválida" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login OK",
      user,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Erro no login" },
      { status: 500 }
    );
  }
}