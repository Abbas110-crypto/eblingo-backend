const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASSWORD}`
  }
});

async function quotesendEmail(userData) {
  try {
    const mailOptions = {
      from: `${userData.email}`,
      to: `${process.env.EMAIL}`,
      subject: 'New Get-a-Quote Form Submission',
      html: `<p>New Quote Request</p>
             <ul>
               <li>Name: ${userData.name}</li>
               <li>Email: ${userData.email}</li>
               <li>Source Language: ${userData.sourceLanguage}</li>
               <li>Target Language: ${userData.targetLanguage}</li>
               <li>Services: ${userData.services}</li>
               <li>Upload Link: ${userData.uploadlink}</li>
             </ul>`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { quotesendEmail };