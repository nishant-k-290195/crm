import htmlTemplate from './pdf/htmlTemplate'
import {server} from '../../../config'
const puppeteer = require('puppeteer')

const pdf = async (quoteData) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    const options = {
      path:'./public/temp/quote.pdf',
      format: 'A4',
      printBackground: true,
    }

    await page.goto(`${server}/quotes`, {waitUntil: 'networkidle2'})
    await page.setContent(htmlTemplate(quoteData))
    await page.pdf(options)
    await browser.close()

  }catch(e){
    console.log(e)
  }
}
const quoteHandler = async (req, res) => {
  await pdf(req.body)
  res.status(200).json({ status: 'success' })
}

export default quoteHandler