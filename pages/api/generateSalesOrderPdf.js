import salesOrderHtml from './salesOrderHtml'
const puppeteer = require('puppeteer')

const createSalesOrderPdf = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage()
      const options = {
        path:'./public/temp/salesOrder.pdf',
        format: 'A4',
        printBackground: true,
      }

      await page.goto('http://localhost:3000/salesOrders', {waitUntil: 'networkidle2'})
      await page.setContent(salesOrderHtml)
      await page.pdf(options)
      await browser.close()

    }catch(e){
      console.log(e)
    }
}

export default async (req, res) => {
  await createSalesOrderPdf()
  res.status(200).json({ name: 'done' })
}

