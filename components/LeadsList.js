import {useState} from 'react'

const LeadsList = (props) => {

  console.log(props.lead)

  return (
    <div>
      <ul>
        <li>Select</li>
        <li>Lead ID</li>
        <li>Name </li>
        <li>Phone</li>
        <li>Email</li>
        <li>Shipping City</li>
        <li>Shipping State</li>
        <li>Zip Code</li>
        <li>Customer ID</li>
        <li>Business</li>
        <li>Status</li>
        <li>Sales Rep</li>
        <li>Amount</li>
        <li>Created Date</li>
      </ul>
    </div>
  )
}

export default LeadsList
