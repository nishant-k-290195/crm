import quoteHtml from './quoteHtml'
const puppeteer = require('puppeteer')

const createQuotePdf = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage()
      const options = {
        path:'./public/temp/quote.pdf',
        format: 'A4',
        printBackground: true,
      }

      await page.goto('http://localhost:3000/quote', {waitUntil: 'networkidle2'})
      await page.setContent(quoteHtml)
      await page.pdf(options)
      await browser.close()

    }catch(e){
      console.log(e)
    }
}

export default async (req, res) => {
  await createQuotePdf()
  res.status(200).json({ name: 'done' })
}

