import SalesOrderPdf from '../components/SalesOrderPdf'

const handleClick = () => {

}

const salesOrders = () => {

  return (
    <>
      <SalesOrderPdf />
      <button onClick={handleClick}>Generate Sales Order</button>
    </>
  )
}

export default salesOrders
