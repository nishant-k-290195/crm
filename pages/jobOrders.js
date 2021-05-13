const axios = require('axios');
import Link from 'next/link'
// import JobOrderPdf from '../components/JobOrderPdf'

const quote = {
  name: 'Daniel Martinez',
  delivery: 'fds street dover DeDover, Ca 12345',
  deliveryDate: 'May 9, 2021',
  pickupDate: 'May 9, 2021',
  items: [
    'Standard Portable Restroom',
    'ADA-Compliant Portable Restroom',
    'Flushable Restroom-Sink inside',
    'Hand Washing Sink Station'
  ],
  qty: 1,
  price: '$200',
  total: '$200',
  totalAmount: '$200',
  longTermUse: [
    'Billing Cycle Period is 28 Days.',
    'After the end of 1st billing cycle period, the same amount will be renewed for the next month if the service is extended.',
    'Includes weekly once cleaning service.'
  ],

  shortTermUse: [
    'During weekends we deliver on Friday and pickup on Monday.',
    'During normal week days, we deliver day before your event and pickup the day after your event',
    'No service is required for short Term Us'
  ],
  website: 'www.rentaporta.com',
  supportEmail: 'support@rentaporta.com',
  phone: '(855) 780 3061'
}

const handleClick = async () => {
  try{
    const res = await axios.post('/api/generateJobOrderPdf', quote)
    if(res.status === 200){
      window.open("/temp/jobOrder.pdf")
    }

  }catch(err){
    alert(err)
  }
}

const JobOrders = () => {
  return (
    <button onClick={ handleClick } type="button">Generate Job Order</button>
  )
}

export default JobOrders
