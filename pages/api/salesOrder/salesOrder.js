import pdfTemplate from './pdf/pdfTemplate'
import {server} from '../../../config'
import puppeteer from 'puppeteer'

const pdf = async (salesOrderData) => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
  const page = await browser.newPage()
  const options = {
    path:'./public/temp/salesOrder.pdf',
    format: 'A4',
    printBackground: true,
  }
  await page.goto(`${server}/salesOrders`, {waitUntil: 'networkidle2'})
  await page.setContent(pdfTemplate(salesOrderData))
  await page.pdf(options)
  await browser.close()
}

const salesOrderHandler = async (req, res) => {
  if(req.method === "POST"){
    try{
      await pdf(req.body)
      res.status(200).json({ status: 'success' })
    }catch(err){
      res.send(err)
    }
  }
}

export default salesOrderHandler