import EmailTemplate from "../../../components/email-template/index";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateValidationCode(length: number) {
  const characters = "0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const validationCode = generateValidationCode(6);
    const { data } = await resend.emails.send({
      from: "EduHunt <onboarding@resend.dev>",
      to: [email],
      subject: "Confirm Email",
      react: EmailTemplate({ validationCode }),
    });

    return Response.json({
      ...data,
      validationCode,
    });
  } catch (error) {
    return Response.json({ error });
  }
}
