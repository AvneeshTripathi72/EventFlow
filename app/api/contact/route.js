import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    // Configure the email transport using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Determine the subject based on the form type
    const isRegister = data.type === 'register' || data.formType === 'register';
    const artistName = typeof data.selectedArtist === 'object' && data.selectedArtist !== null ? data.selectedArtist.name : (data.selectedArtist || '');
    const subjectPrefix = isRegister ? "New Artist Registration" : "New Booking Inquiry";
    
    let artistDetailsString = '';
    if (data.selectedArtist && typeof data.selectedArtist === 'object') {
      const a = data.selectedArtist;
      artistDetailsString = `
========================================
✨ REQUESTED ARTIST DETAILS
========================================
Artist Name:    ${a.name || 'N/A'}
Category:       ${a.subCategory || a.category || 'N/A'}
Location:       ${[a.city, a.state].filter(Boolean).join(', ') || a.location || 'N/A'}
Languages:      ${a.languages || 'N/A'}
Price Range:    ${a.priceMin && a.priceMax ? `₹${a.priceMin} - ₹${a.priceMax}` : (a.priceMin ? `Starting at ₹${a.priceMin}` : 'N/A')}
`;
    } else if (artistName) {
      artistDetailsString = `
========================================
✨ REQUESTED ARTIST DETAILS
========================================
Artist Name:    ${artistName}
`;
    }

    // Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send it to yourself
      subject: `${subjectPrefix} from ${data.name}${artistName ? ` for ${artistName}` : ''}`,
      text: `
You have received a new inquiry from Magnevents!

========================================
👤 USER & CONTACT DETAILS
========================================
Name:           ${data.name || 'N/A'}
Email:          ${data.email || 'N/A'}
Phone:          ${data.phone || 'N/A'}

========================================
📅 EVENT DETAILS
========================================
Event Type:     ${data.eventType || 'N/A'}
Event Date:     ${data.date || 'N/A'}
Location:       ${data.location || 'N/A'}
Requested Type: ${data.artistType && data.artistType.length > 0 ? data.artistType.join(', ') : 'N/A'}
Budget:         ${data.budget || 'N/A'}

========================================
📝 ADDITIONAL MESSAGE
========================================
${data.message || 'No additional message provided.'}
${artistDetailsString}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}
