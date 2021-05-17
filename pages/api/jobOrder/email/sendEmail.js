import nodemailer from 'nodemailer';
import emailBodyTemplate from './emailBodyTemplate'

const { values } = global.quoteData

export default async function sendEmailHandler (req, res){
  const {
    query: { id, name },
    method,
  } = req

  if (method == 'POST') {
    try{
        const transporter = nodemailer.createTransport({
          host: "smtp.zoho.in",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
          user: process.env.DANIEL_EMAIL_ID, // generated ethereal user
          pass: process.env.DANIEL_EMAIL_PASS, // generated ethereal password
          },
          tls:{rejectUnauthorized: false}
        });
        
        const info = await transporter.sendMail({
          from: `Daniel Martinez<${process.env.DANIEL_EMAIL_ID}>`, // sender address
          to: `${values.vendorEmail}`, // list of receivers
          subject: "Quengenesis LLC: Job_Order Confirmation", // Subject line
          attachments: [{
            filename: 'Job_Order.pdf',
            content: emailBodyTemplate,
            path: './public/temp/jobOrder.pdf',
          }],
          text: emailBodyTemplate, // plain text body 
          // html: `<p>This is quote email</p>`// html body
        })


      await res.status(200).json({ status: 'Success' })
    }
    catch(err){
      res.send(err)
    }  

  }
}
