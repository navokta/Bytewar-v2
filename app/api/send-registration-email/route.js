// app/api/send-registration-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';





export async function POST(request) {

  if (!nodemailer || typeof nodemailer.createTransport !== 'function') {
    console.error('Nodemailer import failed or createTransport is not available:', nodemailer);
    return NextResponse.json(
      { message: 'Server configuration error. Please contact the administrator.' },
      { status: 500 }
    );
  }

  try {
    const data = await request.json();

    const { name, email, phone, teamName, altPhone, upiId, members } = data;
    const transporter = nodemailer.createTransport({ 
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // Your sender email
        pass: process.env.EMAIL_PASS, // Your sender email's app password
      },
    });

    await transporter.verify();
    console.log('Nodemailer transporter verified successfully.');

    // --- Compose Email Content ---
    // Email TO the user who registered
    const userMailOptions = {
      from: `"ByteWar Team" <${process.env.EMAIL_USER}>`, // Sender address (your system)
      to: email, // Recipient: User's email from the form
      subject: `Registration Confirmation for Team ${teamName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 640px; margin: auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
  <h2 style="color: #4a00e0; font-size: 24px; margin-bottom: 20px;">ByteWar-V2 Hackathon Registration Confirmation</h2>

  <p style="font-size: 16px; color: #333333;">Dear <strong>${name}</strong>,</p>

  <p style="font-size: 16px; color: #333333;">
    Thank you for registering your team "<strong>${teamName}</strong>" for the <strong>ByteWar-V2 Hackathon</strong>. We are excited to have you on board and look forward to an innovative and competitive event!
  </p>

  <h3 style="color: #8e2de2; font-size: 20px; margin-top: 30px;">📋 Registration Summary</h3>
  <ul style="list-style: none; padding-left: 0; font-size: 15px; color: #444;">
    <li><strong>Team Name:</strong> ${teamName}</li>
    <li><strong>Team Size:</strong> ${members.length}</li>
    <li><strong>Primary Contact:</strong> ${name} (<a href="mailto:${email}" style="color:#4a00e0; text-decoration: none;">${email}</a>, ${phone})</li>
    ${altPhone ? `<li><strong>Alternate Contact:</strong> ${altPhone}</li>` : ''}
    <li><strong>UPI ID for Payment:</strong> ${upiId}</li>
  </ul>

  <h3 style="color: #8e2de2; font-size: 20px; margin-top: 30px;">👥 Team Members</h3>
  <ul style="padding-left: 20px; font-size: 15px; color: #444;">
    ${members.map((member, index) => `<li><strong>Member ${index + 1}:</strong> ${member.name} – ${member.role}</li>`).join('')}
  </ul>

  <p style="font-size: 16px; color: #333333; margin-top: 30px;">
    If any of the above details need correction or updates, please contact us at your earliest convenience.
  </p>

  <p style="font-size: 16px; color: #333333;">
    We appreciate your enthusiasm and wish your team the very best as you prepare for the competition.
  </p>

  <p style="font-size: 16px; color: #333333; margin-top: 40px;">
    Best regards,<br>
    <strong>The ByteWar-V2 Organizing Team</strong><br>
    <span style="color: #888;">Powered by Navokta</span>
  </p>
</div>

      `,
    };

    // Optional: Email TO Admin/Event Organizers
    // const adminMailOptions = {
    //   from: `"Wow Event Registration" <${process.env.EMAIL_USER}>`,
    //   to: 'admin@yourevent.com', // Replace with actual admin email(s)
    //   subject: `New Registration: Team ${teamName}`,
    //   text: `A new team has registered:\n\nTeam Name: ${teamName}\nLeader: ${name}\nEmail: ${email}\nPhone: ${phone}\nTeam Size: ${members.length}\nMembers: ${members.map(m => `${m.name} (${m.role})`).join(', ')}`
    // };

    // --- Send Emails ---
    // Send confirmation email to the user
    const info = await transporter.sendMail(userMailOptions);
    console.log('Confirmation email sent successfully!', info.messageId); // Log message ID

    // Optional: Send notification email to admin
    // await transporter.sendMail(adminMailOptions);
    // console.log('Notification email sent to admin');

    // --- Respond to the Client ---
    return NextResponse.json({ message: 'Registration successful! A confirmation email has been sent.' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    // Return a user-friendly error message
    // Differentiate between server errors and potential user input issues if needed
    let errorMessage = 'Failed to process registration. Please try again later.';
    if (error.code === 'EAUTH' || error.code === 'EENVELOPE') {
        // Common SMTP errors related to auth or bad email format
        errorMessage = 'There was an issue with the registration details. Please check your email address and try again.';
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        // Network related errors
         errorMessage = 'Unable to send confirmation email at the moment. Your registration might still be saved. Please contact support.';
    }
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 } // Internal Server Error
    );
  }
}