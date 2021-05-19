import emailBodyTemplate from './emailBodyTemplate'
import nodemailer from 'nodemailer';

const email = async (values) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    user: process.env.EMAIL_ID, // generated ethereal user
    pass: process.env.EMAIL_PASS, // generated ethereal password
    },
    tls:{rejectUnauthorized: false}
  })
  
  await transporter.sendMail({
    from: `Rent A Porta<${process.env.EMAIL_ID}>`, // sender address
    to: `${values.email}`, // list of receivers
    subject: "Rent A Porta: Quote", // Subject line
    attachments: [{
      filename: 'quote.pdf',
      path: './public/temp/quote.pdf',
    }],
    text: emailBodyTemplate(values), // plain text body 
    // html: `<p>This is quote email</p>`// html body
  })
  
}

export default async function sendEmailHandler (req, res){
  if(req.method ==="POST"){
    try{
      await email(req.body)
      res.status(200).json({ status: 'success' })
    }  catch(err){
      res.send(err)
    }  
  }
}