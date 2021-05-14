import {createContext, useState} from 'react'

export const ItemsContext = createContext()

export const ItemsContextProvider = ({children}) => {
  const [itemsArray, setItemsArray] = useState([])
  return (
    <ItemsContext.Provider value={[itemsArray, setItemsArray]}>
      {children}
    </ItemsContext.Provider>
  )
}