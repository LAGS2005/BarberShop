import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password, phone } = await req.json();

    // 🔍 1. Validar dados
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    // 🔍 2. Verificar se usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email já cadastrado" },
        { status: 400 }
      );
    }

    // 🔐 3. Criptografar senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 4. Salvar no banco
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        telefone: phone,
        role: "client",
      },
    });

    // ✅ 5. Retornar sucesso
    return NextResponse.json({
      message: "Usuário criado com sucesso",
      user,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erro no servidor" },
      { status: 500 }
    );
  }
}