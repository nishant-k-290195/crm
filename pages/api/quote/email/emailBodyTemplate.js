const { values } = global.quoteData
const emailBodyTemplate = 
`Hi ${values.fullName},

Thank you for your interest in Rent A Porta, a portable equipment rental company.
  
Please find attached the Quote # ${values.quoteNumber} that you requested.
  
For placing the order, you can respond back to this email or call us at: (855) 780-3061.
  
A prompt response will be extremely appreciated.
  
Thanks & Regards,
Daniel Martinez | Rent A Porta
Toll-free: (855) 780-3061
support@rentaporta.com
https://www.rentaporta.com`

export default emailBodyTemplate