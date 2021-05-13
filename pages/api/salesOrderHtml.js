import salesOrderCss from './salesOrderCss'

const quoteHtml = `
  <html>
    <head>
      <style>
        ${salesOrderCss}
      </style>
    </head>
    <body>
      <div class="section-1">
        <img src="roundlogo.png" />
        <h1>Sales Order # ${`46545`}</h1>
      </div>
      <div class="section-2">
        <div class='section-2-left'>
          <div>
            <h3>Customer Name</h3>
            <p>${`Daniel Martinez`}</p>
          </div>
          <div>
            <h3>Delivery Address</h3>
            <p>${`fds street dover DeDover, Ca 12345`}</p>
          </div>
          <div>
            <h3>Onsite Contact Details</h3>
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
        <div>
          <h3>Long Term Use</h3>
          <ul>
            <li>Billing Cycle Period is 28 Days.</li>
            <li>Includes weekly once cleaning service.</li>
            <li>If the service is extended after the end of the first billing cycle period then same amount will be charged for the next month.</li>
          </ul>
        </div>
        <div>
          <h3>Short Term Use</h3>
          <ul>
            <li>During weekends we deliver on Friday and pickup on Monday.</li>
            <li>During normal days, we deliver a day before your event and pickup the day after your event.</li>
          </ul>
        </div>
      </div>
      <div class='cancellation'>
        <p><b>Note:</b> A cancellation fee of $50/unit will be charged if the cancellation is made just a day before the delivery.</p>
      </div>
      <footer>
        <ul>
          <li><a href='https://www.rentaporta.com/'>www.rentaporta.com</a></li>
          <li><a href="mailto:support@rentaporta.com">support@rentaporta.com</a></li>
          <li><a href="tel:+18557803061">(855) 780-3061</a></li>
        </ul>
      </footer>
    </body>
  </html>
`

export default quoteHtml