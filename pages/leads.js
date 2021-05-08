import LeadsList from "../components/LeadsList"
import LeadsSearch from "../components/LeadsSearch"
import CreateLeads from "../components/CreateLeads"

const lead = {}

const leads = () => {

  return (
    <div>
      <LeadsSearch />
      <LeadsList />
      <CreateLeads />
    </div>
  )
}

export default leads
