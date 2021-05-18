import cssTemplate from './cssTemplate'

const itemRows = (itemRowArray) => {
  itemRowArray.map((element, {index} )=> {
    const {item, desc, qty, rate} = element
    const total = qty*rate
    return (
      `<ul key=${index} id=${index} class='items-list'>
        <li>
          <p>${item}</p>
        </li>
        <li>
          <p>${desc}</p>
        </li>
        <li>
          <p>${qty}</p>
        </li>
        <li>
          <p>$${rate}</p>
        </li>
        <li>
          <p>$${total}</p>
        </li>
      </ul>`
    )
  }).join('')
}

const totalAmount = (itemRowArray) => {
  itemRowArray.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.qty * currentValue.rate)
  }, 0)
}

const htmlTemplate = ({ itemRowArray, values, currentLongDate } ) => {

  const {day, month, date, year} = currentLongDate
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const deliveryDate = new Date(`${values.deliveryDate}`)
  const longDeliveryDate = `${days[deliveryDate.getDay()]} ${months[deliveryDate.getMonth()]} ${deliveryDate.getDate()}, ${deliveryDate.getFullYear()}`
  const pickupDate = new Date(`${values.pickupDate}`)
  const longPickupDate = `${days[pickupDate.getDay()]} ${months[pickupDate.getMonth()]} ${pickupDate.getDate()}, ${pickupDate.getFullYear()}`
  return `<html>
    <head>
      <style>
        ${cssTemplate}
      </style>
    </head>
      <body>
        <div class="section-1">
          <div class="section-1-left">
            <div>
              <img src="static/logo.svg" alt="https://www.rentaporta.com">
              <h4>Quengenesis LLC</h4>
              <p>8 The Green STE R Dover, DE 19901</p>
              <p>Ph: 302-223-5926</p>
              <hr/>
            </div>
              <div>
              <h3>Vendor</h3>
              <p>${values.vendor}</p>
              <p>${values.vendorAddress}</p>
              <p>${values.vendorEmail}</p>
              <p>${values.vendorPhone}</p>
              <p>${values.vendorFax}</p>
            </div>
          </div>

          <div class="section-1-right">
            <h1>Job Order # ${values.quoteNumber}</h1>
            <h3>${day} ${month} ${date}, ${year}</h3>
          </div>
        </div>
        <hr/>
      <div class="section-2">
        <div class='section-2-left'>
          <div>
            <h3>Delivery Address</h3>
            <p>${values.streetAddress}</p>
            <p>${values.city} ${values.state} ${values.zip}</p>
          </div>
          <div>
            <h3>Instructions</h3>
            <p>${values.instructions}</p>
          </div>
          <div>
            <h3>Onsite Contact</h3>
            <p>${values.onsitePerson} | ${values.onsitePhone}</p>
          </div>
        </div>

        <div class='section-2-right'>
          <div>
            <h3>Delivery Date</h3>
            <p>${longDeliveryDate}</p>
          </div>
          <div>
            <h3>Pickup Date</h3>
            <p>${longPickupDate}</p>
          </div>
        </div>
      </div>
    
      <div class='section-3'>
        <ul class='items-heading'>
          <li>
            <h3>ITEMS</h3>
          </li>
          <li>
            <h3>DESCRIPTION</h3>
          </li>
          <li>
            <h3>QTY</h3>
          </li>
          <li>
            <h3>RATE</h3>
          </li>
          <li>
            <h3>TOTAL</h3>
          </li>
        </ul>
          ${itemRows(itemRowArray)}
        <div>
          <h4>Total Amount $${totalAmount(itemRowArray)}</h4>
        </div>
      </div>
      <hr/>
      <div class='section-4'>
        <h3>By accepting this Job Order, Vendor (Receiver of the Job Order) agrees</h3>
        <ul class='outer'>
          <li>
            not to accept work, enter into an agreement or accept an obligation with any of the client/customers, whose job has been assigned to the vendor via this job order.
          </li>
          <li>
            not to ask for work, contact, or support in the servicing of client/customer specified in the Job Orders issued by this Company to the vendor in order to
            <ul class='inner'>
              <li>
                persuade Company's clients/prospects to cancel, transfer or cease doing business in whole or in part with the Company or
              </li>
              <li>
                persuade Company's clients/prospects to do business with any person or business entity in competition with the business of the Company as conducted as of the date of this Agreement.
              </li>
            </ul>
          </li>
          <li>
            to maintain the necessary General Liability Insurance, Worker’s Compensation Insurance, Disability Insurance, Auto Accident, Auto Theft, Auto Damage and Property Damage or Loss insurance. Also, agrees to be responsible for any claims by the Quengenesis LLC customers while the equipment is in use.
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li><a href='https://www.quengenesis.io/'>www.quengenesis.io</a></li>
          <li><a href="mailto:info@quengenesis.io">info@quengenesis.io</a></li>
          <li><a href="tel:+1302--492-2401">(302) 492-2401</a></li>
        </ul>
      </footer>
    </body>
  </html>
`
}

export default htmlTemplate