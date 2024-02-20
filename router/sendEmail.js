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

async function sendEmail(userData) {
  try {
    const mailOptions = {
      to: `${process.env.INFOEMAIL}`,
      subject: 'New Contact Form Submission Received | Eblingo',
      html: `<p>
      This is an auto-generated email to inform you that you've received a new submission through the contact form on your website. Please find the details of the submission below for your review and action.
         <br />
      Submission Details:<br />
      Name: ${userData.name}<br />
      Email: ${userData.email}<br />
      Source Language: ${userData.sourceLanguage}<br />
      Target Language: ${userData.targetLanguage}<br />
      Project Size: ${userData.services}<br />
      Upload Link: ${userData.uploadlink}<br />
      <br />
      Please take the necessary steps to follow up on this submission as appropriate. Should you require any further information or assistance, feel free to contact the user directly through the provided email or phone number.
      <br />
      Thank you for your attention to this matter.<br />
      <br />
      Eblingo Automated System
            </p>`
    };


    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; 
  }
}

module.exports = { sendEmail };
