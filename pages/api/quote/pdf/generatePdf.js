import {server} from '../../../../config'
import htmlTemplate from './htmlTemplate'
const puppeteer = require('puppeteer')

export default async (req, res) => {
  try {
    const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']});
    const page = await browser.newPage()
    const options = {
      path:'./public/temp/quote.pdf',
      format: 'A4',
      printBackground: true,
    }
    await page.goto(`${server}/quotes`, {waitUntil: 'networkidle2'})
    await page.setContent(htmlTemplate)
    await page.pdf(options)
    await browser.close()
    res.status(200).json({status:'Success'})
  }catch(e){
    console.log(e)
  }
}

