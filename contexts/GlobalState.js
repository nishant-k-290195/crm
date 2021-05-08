import {createContext,useReducer} from 'react'
import Reducer from './Reducer';

const initialState = {
  leads: [
    // {
    //   leadId: "1",
    //   fName: "Nishant", 
    //   lName: "Kumar", 
    //   cName: "Quengenesis LLC", 
    //   phone: "09002785683",
    //   email: "nishant290195.nkr@gmail.com", 
    //   fax: "09002785683",
    //   city: "Hyderabad",
    //   state: "Telangana",
    //   country: "India",
    //   status: "prospect",
    //   streetAddress: "Sai Nagar Ayyappa Society, Madhapur",
    //   zipCode: "500081",
    //   leadSource: "web",
    //   assignedTo: "nash",
    //   business: "quengenesis",
    // }
  ]
}

// Create context
export const GlobalContext = createContext(initialState)

// context provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

// actions
  const addLead = (lead) => {
    dispatch({
      type: "ADD_LEAD",
      payload: lead
    })
  }


  const deleteLead = (id) => {
    dispatch({
      type: "DELETE_LEAD",
      payload: id,
    })
  }

  const incrementCount = (count) => {
    dispatch({
      type: "COUNT_INCREMENT",
      payload: count
    })
  }

  return (
    <GlobalContext.Provider value={{leads: state.leads, addLead, deleteLead, incrementCount}}>
      {children}
    </GlobalContext.Provider>
  )
}
