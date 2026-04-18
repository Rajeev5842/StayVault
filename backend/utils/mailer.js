import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config(); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEnquiryNotification = async (enquiry) => {
  const { name, email, phone, subject, message } = enquiry;

  const mailOptions = {
    from: `"StayVault" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `📬 New Enquiry: ${subject} — from ${name}`,
    replyTo: email,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
        <div style="background: #1a1209; padding: 24px 32px;">
          <h2 style="color: #c9a84c; margin: 0; font-size: 22px;">New Guest Enquiry</h2>
          <p style="color: #a0916e; margin: 4px 0 0; font-size: 13px;">StayVault — Contact Form</p>
        </div>
        <div style="padding: 28px 32px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; color: #888; width: 100px;">Name</td>     <td style="padding: 8px 0; color: #222; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Email</td>    <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Phone</td>    <td style="padding: 8px 0; color: #222;">${phone || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888;">Subject</td>  <td style="padding: 8px 0; color: #222;">${subject || "—"}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #888; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
          <p style="color: #333; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="background: #f9f6f0; padding: 14px 32px; text-align: center;">
          <p style="color: #bbb; font-size: 12px; margin: 0;">Reply directly to this email to respond to the guest.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};