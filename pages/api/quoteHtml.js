import quoteCss from './quoteCss'

const quoteHtml = `
  <html>
    <head>
      <style>
        ${quoteCss}
      </style>
    </head>
    <body>
      <div class="section-1">
        <img src="roundlogo.png" />
        <h1>${`Quote # 424546`}</h1>
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
        </div>

        <div class='section-2-right'>
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
            <p>${`Standard Portable Restroom`}</p>
          </li>
          <li>
            <p>${`Standard Portable Restroom-Regular event unit`}</p>
          </li>
          <li>
            <p>${`1`}</p>
          </li>
          <li>
            <p>$ ${`195`}</p>
          </li>
          <li>
            <p>$ ${`195`}</p>
          </li>
        </ul>
        <div>
          <h4>Total Amount</h4><p>$ ${`195`}</p>
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