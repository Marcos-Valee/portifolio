import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
import { NextResponse } from "next/server";

// Variáveis de ambiente
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST!;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME!;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD!;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER!;

// Configuração do transportador do Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

// Validação com Zod
const formSchema = z.object({
  name: z.string().min(1, "Nome obrigatório").max(50),
  email: z.string().email("E-mail inválido").max(50),
  message: z.string().min(1, "Mensagem obrigatória").max(2000),
});

// Rate limit simples 
const RATE_LIMIT: Record<string, number[]> = {};
const MAX_REQUESTS = 5;
const TIME_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (!RATE_LIMIT[ip]) RATE_LIMIT[ip] = [];
  RATE_LIMIT[ip] = RATE_LIMIT[ip].filter(ts => now - ts < TIME_WINDOW_MS);
  if (RATE_LIMIT[ip].length >= MAX_REQUESTS) return true;
  RATE_LIMIT[ip].push(now);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Muitas requisições. Tente novamente em instantes." },
        { status: 429 }
      );
    }

    const json = await request.json();
    const parsed = formSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Dados inválidos." },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    // Sanitização do HTML
    const safeMessage = sanitizeHtml(message, {
      allowedTags: [],
      allowedAttributes: {},
    });

    await transporter.sendMail({
      from: SMTP_SERVER_USERNAME,
      to: SITE_MAIL_RECIEVER,
      subject: `Mensagem do site de ${name}`,
      text: `De: ${email}\n\n${message}`,
      html: `<p><strong>De:</strong> ${email}</p><p>${safeMessage}</p>`,
    });

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso! 😁" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { message: "Erro interno ao enviar o email." },
      { status: 500 }
    );
  }
}
