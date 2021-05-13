import jobOrderHtml from './jobOrderHtml'
const puppeteer = require('puppeteer');

const createJobOrderPdf = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage()
      const options = {
        path:'./public/temp/jobOrder.pdf',
        format: 'A4',
        printBackground: true,
      }

      await page.goto('http://localhost:3000/jobOrders', {waitUntil: 'networkidle2'})
      await page.setContent(jobOrderHtml)
      await page.pdf(options)
      await browser.close()

    }catch(e){
      console.log(e)
    }
}

export default async (req, res) => {
  await createJobOrderPdf()
  res.status(200).json({ name: 'done' })
}

