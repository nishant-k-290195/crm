import SalesOrderPdfStyles from '../styles/SalesOrderPdf.module.css'

const SalesOrderPdf = () => {
  return (
    <div className={SalesOrderPdfStyles.section}>
      <div className={SalesOrderPdfStyles.container}>
        <div className={SalesOrderPdfStyles.quote}>

          <div className={SalesOrderPdfStyles.section1}>
            <img src="roundlogo.png" alt="https://rentaporta.com" />
            <h1>QUOTE # 4523</h1>
          </div>

          <div className={SalesOrderPdfStyles.section3} >
            <div className={SalesOrderPdfStyles.name}>
              <h3>Customer Name</h3>
              <p>Daniel Martinez</p>
            </div>
            <div className={SalesOrderPdfStyles.address}>
              <h3>Delivery Address</h3>
              <p>fds street dover DeDover, Ca 12345</p>
            </div>
          </div>

          <div className={SalesOrderPdfStyles.section4}>
            <div>
              <h3>Delivery Date</h3>
              <p>May 9, 2021</p>
            </div>
            <div>
              <h3>Pickup Date</h3>
              <p>May 9, 2021</p>
            </div>
          </div>

          <div className={SalesOrderPdfStyles.section5} >
            <div>
              <h3>ITEMS</h3>
              <p>Standard Portable Restroom</p>
              <p>Standard Portable Restroom</p>
              <p>Standard Portable Restroom</p>
              <p>Standard Portable Restroom</p>
              <p>Standard Portable Restroom</p>
              <p>Standard Portable Restroom</p>
            </div>
            <div>
              <h3>QTY</h3>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </div>
            <div>
              <h3>PRICE</h3>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
            </div>
            <div>
              <h3>TOTAL</h3>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
              <p>$195</p>
            </div>
          </div>

          <div className={SalesOrderPdfStyles.section6} >
            <h3>TOTAL AMOUNT</h3>
            <p>$195</p>
          </div>
          <div className={SalesOrderPdfStyles.section8} >
            <div>
              <h4>Long Term Use</h4>
              <ul>
                <li>Billing Cycle Period is 28 Days.</li>
                <li>After the end of 1st billing cycle period, the same amount will be renewed for the next month if the service is extended.</li>
                <li>Includes weekly once cleaning service.</li>
              </ul>
            </div>

            <div>
              <h4>Short Term Use</h4>
              <ul>
                <li>During weekends we deliver on Friday and pickup on Monday.</li>
                <li>During normal week days, we deliver day before your event and pickup the day after your event </li>
                <li>No service is required for short Term Use</li>
              </ul>
            </div>
          </div>

          <div className={SalesOrderPdfStyles.section9}>
            <h5>www.rentaporta.com</h5>
            <h5>support@rentaporta.com</h5>
            <h5>(855) 780-3061</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesOrderPdf
