"use server";

import nodemailer from "nodemailer";

interface SendMailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  portfolio: string;
  company: string;
  industry: string;
  description: string;
  serviceType: string;
  features: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

export async function sendMail({
  firstName,
  lastName,
  email,
  phone,
  address,
  linkedin,
  portfolio,
  company,
  industry,
  description,
  serviceType,
  features,
  timeline,
  budget,
  additionalInfo,
}: SendMailProps): Promise<{ type: "success" | "error"; message: string }> {
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;
  const TO = process.env.TO_EMAIL;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: TO,
    subject: "New Inbound Lead",
    text: `
      New Inbound Lead
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Address: ${address}
      LinkedIn: ${linkedin}
      Portfolio: ${portfolio}
      Company: ${company}
      Industry: ${industry}
      Description: ${description}
      Service Type: ${serviceType}
      Features: ${features}
      Timeline: ${timeline}
      Budget: ${budget}
      Additional Info: ${additionalInfo}
    `,
    html: `
      <h1>New Inbound Lead</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
      <p><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Features:</strong> ${features}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Additional Info:</strong> ${additionalInfo}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return {
      type: "success",
      message: "Email sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      type: "error",
      message: "Email failed to send",
    };
  }
}
