const axios = require('axios');
import Link from 'next/link'
// import SalesOrderPdf from '../components/SalesOrderPdf'

const quote = {
  quoteNo: '4588',
  name: 'Daniel Martinez',
  deliveryAddress: 'fds street dover DeDover, Ca 12345',

  deliveryDate: 'May 9, 2021',
  pickupDate: 'May 9, 2021',

  items: [
    'Standard Portable Restroom',
    'ADA-Compliant Portable Restroom',
    'Flushable Restroom-Sink inside',
    'Hand Washing Sink Station',
    'salesTax',
    'delivery',
    'pickup',
    'environmentalFee',
    'others',
  ],
  desc: '',
  qty: 1,
  price: '$200',
  total: '$200',
  totalAmount: '$200',
}

const handleClick = async () => {
  try{
    const res = await axios.post('/api/generateSalesOrderPdf', quote)
    
    if(res.status === 200){
      window.open("/temp/salesOrder.pdf")
    }

  }catch(err){
    alert(err)
  }
}

const salesOrders = () => {
  return (
    <button onClick={handleClick} type="button">Generate Sales Order</button>
  )
}

export default salesOrders
