import htmlTemplate from './pdf/htmlTemplate'
import {server} from '../../../config'
import puppeteer from 'puppeteer'
import emailBodyTemplate from './email/emailBodyTemplate'
import nodemailer from 'nodemailer';

const pdf = async (salesOrderData) => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
  const page = await browser.newPage()
  const options = {
    path:'./public/temp/salesOrder.pdf',
    format: 'A4',
    printBackground: true,
  }
  await page.goto(`${server}/salesOrders`, {waitUntil: 'networkidle2'})
  await page.setContent(htmlTemplate(salesOrderData))
  await page.pdf(options)
  await browser.close()
}

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
  });
  
  await transporter.sendMail({
    from: `Rent A Porta<${process.env.EMAIL_ID}>`, // sender address
    to: `${values.email}`, // list of receivers
    subject: "Rent A Porta: Sales Order", // Subject line
    attachments: [{
      filename: 'sales_order.pdf',
      path: './public/temp/salesOrder.pdf',
    }],
    text: emailBodyTemplate(values), // plain text body 
    // html: `<p>This is salesOrder email</p>`// html body
  })
}
const salesOrderHandler = async (req, res) => {
  if(req.method === "POST"){
    try{
      await pdf(req.body)
      await email(req.body.values)
      res.status(200).json({ status: 'success' })
    }catch(err){
      res.send(err)
    }
  }
}

export default salesOrderHandler