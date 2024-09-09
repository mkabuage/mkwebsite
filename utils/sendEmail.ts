// /Users/michaelkabuage/lab/portfolio/mkwebsite/utils/sendEmail.ts

import { Resend } from "resend";

// const resend = new Resend({
//   apiKey: process.env.RESEND_API_KEY, // Ensure to set this environment variable
// });
const resend = new Resend("{process.env.RESEND_API_KEY");

export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const { name, email, message } = data;

  const emailResponse = await resend.emails.send({
    to: "michael.kabuage@daltinum.com", // Replace with your actual receiving email address
    from: email, // Replace with a valid sender email address
    subject: `New contact form submission from ${name}`,
    text: `
      You have a new contact form submission from:
      Name: ${name},
      Email: ${email},
      Message: ${message}
    `,
  });

  return emailResponse;
};
