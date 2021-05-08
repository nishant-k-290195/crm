import {useContext} from 'react'
import {GlobalContext} from '../contexts//GlobalState'

const LeadsList = (props) => {

  const { leads } = useContext(GlobalContext)
  const { deleteLead } = useContext(GlobalContext)

  return (
    <div>
        {leads.map(lead => {
          return(
            <ul>
              <li key={lead.id}>Lead ID {lead.leadId}</li>
              <li>First Name {lead.fName}</li>
              <li>Last Name {lead.lName}</li>
              <li>Company {lead.cName}</li>
              <li>Phone {lead.phone}</li>
              <li>Email {lead.email}</li>
              <li>Fax {lead.fax}</li>
              <li>Business {lead.business}</li>
              <li>Lead Source {lead.leadSource}</li>
              <li>Status {lead.status}</li>
              <li>Sales Rep {lead.assignedTo}</li>
              <li>Street Address {lead.streetAddress}</li>
              <li>Shipping City {lead.city}</li>
              <li>Shipping State {lead.state}</li>
              <li>Zip Code {lead.zipCode}</li>
              <li><button onClick={() => {deleteLead(lead.id)}}>Delete</button></li>
            </ul>
          )
        })}
        
    </div>
  )
}

export default LeadsList
