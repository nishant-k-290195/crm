export default function Home() {
  return (
    <div style={{padding:"4rem"}}>
      <h1>Welcome to the CRM tool for the Website <span><a style={{color: 'blue'}} href="www.rentaporta.com">rentaporta.com</a></span></h1>
      <h3>Currently this project is still under construction.</h3>
      <p >However you can use the "Quote" tab, "Sale Order" tab and the "Job Orders" tab from the left sidebar to create a new quote, sales order and and job orders</p>
      <i style={{background: 'yellow'}}>I request you to ignore the ugly UI of the dashboard for a while and I can assure you will love the ease of automation to send quotes, sales orders pdf, job order pdf to your customers and vendors :)</i>
      <h3>List of working tabs</h3>
      <ul>
        <li>Quotes</li>
        <li>Sales Orders</li>
        <li>Job Orders</li>
      </ul>

      <h3>List of tabs which are not working yet</h3>
      <ul>
        <li>Leads Center</li>
        <li>Customers List</li>
        <li>Vendors List</li>
      </ul>
    </div>
  )
}
