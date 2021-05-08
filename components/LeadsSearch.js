const LeadsSearch = () => {
  return (
      <ul>
        <li><label for="idSearch">Lead ID</label><input type="search" id="idSearch" name="idSearch"></input></li>
        <li><label for="idSearch">First Name</label><input type="search" id="fNameSearch" name="fNameSearch"></input></li>
        <li><label for="idSearch">Last Name</label><input type="search" id="lNameSearch" name="lNameSearch"></input></li>
        <li><label for="idSearch">Company</label><input type="search" id="cNameSearch" name="cNameSearch"></input></li>
        <li><label for="idSearch">Email</label><input type="search" id="emailSearch" name="emailSearch"></input></li>
        <li><label for="idSearch">Phone</label><input type="search" id="phoneSearch" name="phoneSearch"></input></li>
        <li><label for="idSearch">Fax</label><input type="search" id="faxSearch" name="faxSearch"></input></li>
        <li><label for="idSearch">Street</label><input type="search" id="streetAddressSearch" name="streetAddressSearch"></input></li>
        <li><label for="idSearch">City</label><input type="search" id="citySearch" name="citySearch"></input></li>
        <li><label for="idSearch">State</label><input type="search" id="stateSearch" name="stateSearch"></input></li>
        <li><label for="idSearch">Zip Code</label><input type="search" id="zipCodeSearch" name="zipCodeSearch"></input></li>
        <li><label for="idSearch">Country</label><input type="search" id="countrySearch" name="countrySearch"></input></li>
        <li><label for="idSearch">Lead Source</label><input type="search" id="leadSourceSearch" name="leadSourceSearch"></input></li>
        <li><label for="idSearch">Assigned To</label><input type="search" id="assignedToSearch" name="assignedToSearch"></input></li>
      </ul>
  )
}

export default LeadsSearch
