export default (state, action) => {
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
    default: 
      return state
  }
}