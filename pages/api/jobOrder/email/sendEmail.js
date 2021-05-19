import emailBodyTemplate from './emailBodyTemplate'
import nodemailer from 'nodemailer';

const email = async (values) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    user: process.env.DANIEL_EMAIL_ID, // generated ethereal user
    pass: process.env.DANIEL_EMAIL_PASS, // generated ethereal password
    },
    tls:{rejectUnauthorized: false}
  })
  
  await transporter.sendMail({
    from: `Daniel Martinez<${process.env.DANIEL_EMAIL_ID}>`, // sender address
    to: `${values.vendorEmail}`, // list of receivers
    subject: "Rent A Porta: Job Order Confirmation", // Subject line
    attachments: [{
      filename: 'job_order.pdf',
      path: './public/temp/jobOrder.pdf',
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