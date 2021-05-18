import htmlTemplate from './pdf/htmlTemplate'
import {server} from '../../../config'
const puppeteer = require('puppeteer')

const pdf = async (salesOrderData) => {
  try {
    const browser = await puppeteer.launch();
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

  }catch(e){
    console.log(e)
  }
}
const salesOrderHandler = async (req, res) => {
  await pdf(req.body)
  res.status(200).json({ status: 'success' })
}

export default salesOrderHandler