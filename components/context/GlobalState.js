import {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
// Initial State

const initialState = {
  leads: [
    {
      fName: "Nishant", 
      lName: "Kumar", 
      cName: "Quengenesis LLC", 
      email: "nishant290195.nkr@gmail.com", 
      phone: "09002785683",
      assignedTo: "nash",
      business: "quengenesis",
      cName: "Quengenesis LLC",
      city: "Hyderabad",
      country: "India",
      email: "nishant290195.nkr@gmail.com",
      fName: "Nishant",
      fax: "sfdxfvxv",
      lName: "Kumar",
      leadSource: "web",
      phone: "09002785683",
      state: "Telangana",
      status: "prospect",
      streetAddress: "Sai Nagar Ayyappa Society, Madhapur",
      zipCode: "500081",
    }
  ]
}

// Create context
export const GlobalContext = createContext(initialState)

// context provider component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  
  return (
    <GlobalContext.Provider value={{
      leads: state.leads
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
