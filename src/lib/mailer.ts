import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export async function sendEmail(email: string, html: string) {
  const info = await transporter
    .sendMail({
      from: "LKBB Antareja 2024 <antareja@smktelkom-mlg.sch.id>",
      to: email,
      subject: "Verifikasi Email",
      html: html,
      textEncoding: "base64",
    })
    .catch(console.error);

  return info ? info.messageId : null;
}
