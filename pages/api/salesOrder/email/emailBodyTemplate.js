const emailBodyTemplate = (values) => {
return `Hi ${values.fullName},

As per our conversation, we have created a Sales_Order # ${values.salesOrderNumber}.

Please, go through the attachment and verify if all the information provided are correct.

To confirm your order please respond back to this email stating "Approved".

Thanks & Regards,
Daniel Martinez | Rent A Porta
Toll-free: (855) 780-3061
support@rentaporta.com
https://www.rentaporta.com`

}


export default emailBodyTemplate