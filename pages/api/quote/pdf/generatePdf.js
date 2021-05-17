import htmlTemplate from './htmlTemplate'
const puppeteer = require('puppeteer')

const generatePdf = async () => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage()
      const options = {
        path:'./public/temp/quote.pdf',
        format: 'A4',
        printBackground: true,
      }
      await page.goto('http://localhost:3000/quote', {waitUntil: 'networkidle2'})
      await page.setContent(htmlTemplate)
      await page.pdf(options)
      await browser.close()
    }catch(e){
      console.log(e)
    }
}

export default async (req, res) => {
  await generatePdf()
  res.status(200).json({ name: 'done' })
}

