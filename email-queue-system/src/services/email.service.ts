import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rajeshkayal8001@gmail.com",
    pass: "auvcrfeufqvikutb", 
  },
});

export async function sendEmail(to: string, subject: string, body: string) {
  await transporter.sendMail({
    from: "Queue System rajeshkayal8001@gmail.com",
    to,
    subject,
    text: body,
  });
}