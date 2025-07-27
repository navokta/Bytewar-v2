// app/api/send-registration-email/route.js
import { NextResponse } from 'next/server';
// --- Corrected Import ---
// Use default import for nodemailer
import nodemailer from 'nodemailer';
// OR, if the above doesn't work reliably, you can try:
// const nodemailer = require('nodemailer'); // This is the traditional CommonJS way


// IMPORTANT: Environment Variables
// You MUST set these in your `.env.local` file:
// EMAIL_SERVICE=gmail (or outlook, etc.)
// EMAIL_USER=your_email@gmail.com
// EMAIL_PASS=your_app_password (NOT your regular password for Gmail)
// Make sure to add .env.local to your .gitignore!

export async function POST(request) {
  // --- Corrected Import Check ---
  // Add a check to ensure nodemailer is imported correctly
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

    // --- Configure Nodemailer Transporter ---
    // Using environment variables for security
    // --- Corrected Function Name: createTransport ---
    const transporter = nodemailer.createTransport({ 
      service: process.env.EMAIL_SERVICE, // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // Your sender email
        pass: process.env.EMAIL_PASS, // Your sender email's app password
      },
      // --- Additional Options for Reliability ---
      // These options can help, especially with services like Gmail
      // tls: {
      //   rejectUnauthorized: false // Only use if you encounter TLS errors, but be cautious
      // }
      // logger: true, // Enable for debugging SMTP connection issues
      // debug: true,  // Enable for detailed SMTP logs
    });

    // Verify transporter configuration (optional but helpful)
    // This can catch configuration errors early
    await transporter.verify();
    console.log('Nodemailer transporter verified successfully.');

    // --- Compose Email Content ---
    // Email TO the user who registered
    const userMailOptions = {
      from: `"Wow Event Team" <${process.env.EMAIL_USER}>`, // Sender address (your system)
      to: email, // Recipient: User's email from the form
      subject: `Registration Confirmation for Team ${teamName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4a00e0;">Wow Event Registration Confirmation</h2>
          <p>Hi <strong>${name}</strong>,</p>
          <p>Thank you for registering your team "<strong>${teamName}</strong>" for the Wow event!</p>

          <h3 style="color: #8e2de2;">Registration Details:</h3>
          <ul style="list-style-type: none; padding: 0;">
             <li><strong>Team Name:</strong> ${teamName}</li>
             <li><strong>Team Size:</strong> ${members.length}</li>
             <li><strong>Primary Contact:</strong> ${name} (${email}, ${phone})</li>
             ${altPhone ? `<li><strong>Alternate Contact:</strong> ${altPhone}</li>` : ''}
             <li><strong>UPI ID:</strong> ${upiId}</li>
           </ul>

          <h3 style="color: #8e2de2;">Team Members:</h3>
          <ul>
            ${members.map((member, index) => `<li><strong>Member ${index + 1}:</strong> ${member.name} (${member.role})</li>`).join('')}
          </ul>

          <p>We look forward to seeing your team compete!</p>
          <p>Best regards,<br>The Wow Event Team</p>
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