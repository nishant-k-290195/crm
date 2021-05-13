import jobOrderCss from './jobOrderCss'

const jobOrderHtml = `
  <html>
    <head>
      <style>
        ${jobOrderCss}
      </style>
    </head>
    <body>
      <div class="section-1">
        <div>
          <img src="logo.svg" />
          <p>8 The Green STE R</p>
          <p>Dover, DE 19901</p>
          <P>(302) 492-2401</p>
        </div>
        <div>
          <h1>Job Order # 42454</h1>
        </div>
      </div>
      <div class="section-2">
        <div class='section-2-left'>
          <div>
            <h3>Vendor</h3>
            <h4>${`Daniel Martinez`}</h4>
            <p>${`fds street dover DeDover, Ca 12345`}</p>
            <p>${`Ph: 302-223-5926`}</p>
            <p>${`Fax: 302-223-5926`}</p>
          </div>
          <div>
            <h3>Delivery Address</h3>
            <p>${`fds street dover DeDover, Ca 12345`}</p>
          </div>
          <div>
            <h3>Onsite Details</h3>
            <p>${`Call an hour before delivery, Daci Cruz @ 415-847-7122 OR, Waldemar @ 415-246-1303 for placements and directions.`}</p>
          </div>
          <div>
            <h3>Instructions</h3>
            <p>${`Call an hour before delivery.`}</p>
          </div>
        </div>

        <div class='section-2-right'>
          <div>
            <h3>Order Date</h3>
            <p>${`April 05, 2016`}</p>
          </div>
          <div>
            <h3>Delivery Date</h3>
            <p>${`April 05, 2016`}</p>
          </div>
          <div>
            <h3>Pickup Date</h3>
            <p>${`April 05, 2016`}</p>
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
            <h3>PRICE</h3>
          </li>
          <li>
            <h3>TOTAL</h3>
          </li>
        </ul>
        <ul class='items-list'>
          <li>
            <p>ITEMS</p>
          </li>
          <li>
            <p>DESCRIPTION</p>
          </li>
          <li>
            <p>QTY</p>
          </li>
          <li>
            <p>PRICE</p>
          </li>
          <li>
            <p>TOTAL</p>
          </li>
        </ul>
        <div>
          <h4>Total Amount</h4><p>$${`195`}</p>
        </div>
      </div>
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
        <p>Please sign in and send us back a copy.</p>
      </footer>
    </body>
  </html>
`

export default jobOrderHtml