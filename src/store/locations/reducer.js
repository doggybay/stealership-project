import {
  GET_ALL_LOCATIONS_PENDING,
  GET_ALL_LOCATIONS_FAILED,
  GET_ALL_LOCATIONS_SUCCESS
} from './constants'

let initialState = {
  all: [],
  err:{}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LOCATIONS_PENDING:
      return state
    
    case GET_ALL_LOCATIONS_SUCCESS:
      return { ...state, all: action.payload }
    
    case GET_ALL_LOCATIONS_FAILED:
      return { ...state, err: action.payload }
    
    default:
      return state
  }
}