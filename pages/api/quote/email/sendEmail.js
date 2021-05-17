import nodemailer from 'nodemailer';
import emailBodyTemplate from './emailBodyTemplate'

export default async function sendEmailHandler (req, res){
  const {
    query: { id, name },
    method,
  } = req

  if (method == 'POST') {
    try{
        const transporter = await nodemailer.createTransport({
          host: "smtp.zoho.in",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
          user: process.env.EMAIL_ID, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
          },
          tls:{rejectUnauthorized: false}
        });
        
        const info = await transporter.sendMail({
          from: `Rent A Porta<${process.env.EMAIL_ID}>`, // sender address
          to: `Rent A Porta<${process.env.EMAIL_ID}>`, // list of receivers
          subject: "Rent A Porta: Quote", // Subject line
          attachments: [{
            filename: 'quote.pdf',
            content: emailBodyTemplate,
            path: './public/temp/quote.pdf',
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
