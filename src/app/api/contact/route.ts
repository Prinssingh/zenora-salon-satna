import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser"; // or 'emailjs-com'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { user_name: name, user_email: email, subject, message },
      process.env.EMAILJS_PUBLIC_KEY!
    );

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("EmailJS server error:", err);
    return NextResponse.json(
      { status: "error", error: String(err) },
      { status: 500 }
    );
  }
}


// export async function sendMail(subject, body) {
//   const response = await fetch(API_ENDPOINT, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       to: MAIL_TO,
//       subject,
//       body,
//     }),
//   });

//   return response.ok;
// }
