/**
 * nodemailer for sending email services 
 */

const nodemailer = require("nodemailer");


//create transport

const resetMailPassword = async (userEmail, resetToken) => {
    try {
        const transport = nodemailer.createTransport({
            host : process.env.MAILTRAP_HOST,
            port : process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        })

        // send the email
        // email template
        const mailOptions = {
            from: '"MoneyBank" <noreply@moneybank.com>',
            to: userEmail,
            subject: "Password Reset",
            html: `  <div style="background-color:#6B21A8; padding:20px; text-align:center; color:white; border-radius:10px;">
          <h2>Password Reset</h2>
          <p>Click the link below to reset your password. This link will expire in 15 minutes.</p>
          <a href="${process.env.RESET_PASSWORD_LINK}/${resetToken}" 
             style="display:inline-block; margin-top:10px; padding:10px 20px; background-color:white; color:#6B21A8; text-decoration:none; font-weight:bold; border-radius:5px;">
             Reset Password
          </a>
          <p style="margin-top:20px;">If you did not request this, please ignore this email.</p>
        </div>`
        }
        // send email through transporter
        await transport.sendMail(mailOptions);
    } catch (error) {
        console.log("Error in my mail service", error.message)
        throw error;
    }
}

module.exports = { resetMailPassword };