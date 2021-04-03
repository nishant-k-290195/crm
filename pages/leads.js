import LeadsList from "../components/LeadsList"
import CreateLeads from "../components/CreateLeads"
import {useState} from 'react'

const lead = {}

const leads = () => {
  const leadData = values => {
    console.log(values)
    lead = values
  }
  return (
    <div>
      <LeadsList lead={lead}/>
      <CreateLeads leadData={leadData} />
    </div>
  )
}

export default leads
