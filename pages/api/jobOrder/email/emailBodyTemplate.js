const emailBodyTemplate = (values) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const deliveryDate = new Date(`${values.deliveryDate}`)
  const longDeliveryDate = `${days[deliveryDate.getDay()]} ${months[deliveryDate.getMonth()]} ${deliveryDate.getDate()}, ${deliveryDate.getFullYear()}`
  
return `Hi ${values.repName},

As per our conversation, I have attached the Job_Order # ${values.jobOrderNumber}.

Delivery date is ${longDeliveryDate}. Please, go through the attachment for the onsite and other details.

Request you to acknowledge the receiving of this Job_Order by responding back to this email stating "Received".

Thanks & Regards
Daniel Martinez | Quengenesis LLC
(302) 492-2401 | daniel.m@quengenesis.io
https://www.quengenesis.io`
}


export default emailBodyTemplate