const handle = (state, action) => {
  switch(action.type) {
    case 'ADD_LEAD':
      return ({
        ...state,
        leads: [action.payload, ...state.leads]
      })
    case 'DELETE_LEAD':
      return ({
        ...state,
        leads: state.leads.filter((leads => leads.id !== action.payload))
      })
    case 'COUNT_INCREMENT':
      return ({
        count: state.id + 1
      })
    default: 
      return state
  }
}

export default handle