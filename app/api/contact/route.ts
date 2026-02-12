import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  ERROR_FIELDS_REQUIRED,
  ERROR_SEND_FAILED,
  EMAIL_SUBJECT_PREFIX,
  EMAIL_HEADER,
  EMAIL_FROM_NAME,
} from "./messages";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: ERROR_FIELDS_REQUIRED },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${EMAIL_FROM_NAME}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `${EMAIL_SUBJECT_PREFIX} ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px;">
          <p style="color: #999; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">${EMAIL_HEADER}</p>
          <hr style="border: none; border-top: 1px solid #E0E0DC; margin: 16px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #E0E0DC; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: ERROR_SEND_FAILED },
      { status: 500 }
    );
  }
}
