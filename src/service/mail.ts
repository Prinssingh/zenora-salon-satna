const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;
const MAIL_TO = process.env.NEXT_PUBLIC_MAIL_TO!;

export async function sendMail(subject: string, body: string) {
  console.log("Sending mail with:", { subject, body });
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: MAIL_TO,
      subject,
      body,
    }),
  });
  console.log("Mail response:", response.status);
  console.log("Mail response:", response);
  return response.ok;
}
