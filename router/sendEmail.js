const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'farazsafdar110.af@gmail.com',
    pass: 'nrbj pogv qkas jczh'
  }
});

async function sendEmail(userData) {
  try {
    const mailOptions = {
      from: `${userData.email}`, 
      to: 'farazsafdar110.af@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>New User Respond</p>
             <ul>
               <li>Name: ${userData.name}</li>
               <li>Email: ${userData.email}</li>
               <li>Phone: ${userData.phone}</li>
               <li>Source Language: ${userData.sourceLanguage}</li>
               <li>Target Language: ${userData.targetLanguage}</li>
               <li>Project Size: ${userData.projectSize}</li>
               <li>Message: ${userData.message}</li>
             </ul>`
    };


    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
}

module.exports = { sendEmail };
