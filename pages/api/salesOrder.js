const puppeteer = require('puppeteer');
const fs = require('fs-extra')

const createSaleOrderPdf = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage()
      const options = {
        path:'./salesOrder.pdf',
        format: 'A4',
        printBackground: true,
      }

      await page.goto('http://localhost:3000/salesOrders', {waitUntil: 'networkidle2'})
      await page.setContent(<h1>This is Quote</h1>)
      // await page.emulateMedia('screen')
      await page.pdf(options)

      console.log(`pdf generated`)
  
      await browser.close()

    }catch(e){
      console.log(e)
    }
}

export default (req, res) => {
  createSaleOrderPdf()
  res.status(200).json({ name: 'All good!' })
}

