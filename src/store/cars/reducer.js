import {
  GET_ALL_CARS_PENDING,
  GET_ALL_CARS_FAILED,
  GET_ALL_CARS_SUCCESS,
  ADD_NEW_CAR_PENDING,
  ADD_NEW_CAR_SUCCESS,
  ADD_NEW_CAR_FAILED,
  DELETE_CAR_FAILED,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_PENDING,
  EDIT_ONE_CAR_PENDING,
  EDIT_ONE_CAR_SUCCESS,
  EDIT_ONE_CAR_FAILED,
  GET_ONE_CAR_PENDING,
  GET_ONE_CAR_SUCCESS,
  GET_ONE_CAR_FAILED,
  CLEAR_ONECAR_STATE_PENDING,
  CLEAR_ONECAR_STATE_SUCCESS,
  CLEAR_ONECAR_STATE_FAILED
} from './constants'

let initialState = {
  all: [],
  oneCar: {},
  err:{}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARS_PENDING:
    case ADD_NEW_CAR_PENDING:
    case DELETE_CAR_PENDING:
    case EDIT_ONE_CAR_PENDING:
    case GET_ONE_CAR_PENDING:
    case CLEAR_ONECAR_STATE_PENDING:
      return state
    
    case GET_ALL_CARS_SUCCESS:
      return { ...state, all: action.payload }
    
    case ADD_NEW_CAR_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case DELETE_CAR_SUCCESS:
      return {
        ...state, all: state.all.filter(car => car.id !== Number(action.payload))
      }
    
    
    case EDIT_ONE_CAR_SUCCESS:
      return {
        ...state, all: state.all.reduce((acc, car) => {
          if (!acc.includes(car.id)) {
            if (car.id === action.payload.id) {
              acc.push(action.payload)
            } else {
              acc.push(car)
            }
          }
          return acc
        }, [])
        }
    
    case GET_ONE_CAR_SUCCESS:
      return { ...state, oneCar: action.payload}
    
    case CLEAR_ONECAR_STATE_SUCCESS:
      return { ...state, oneCar: action.payload }
    
    case GET_ALL_CARS_FAILED:
    case ADD_NEW_CAR_FAILED:
    case DELETE_CAR_FAILED:
    case EDIT_ONE_CAR_FAILED:
    case GET_ONE_CAR_FAILED:
    case CLEAR_ONECAR_STATE_FAILED:
      return { ...state, err: action.payload }
    
    default:
      return state
  }
}


// .reduce((acc, car) => {
//   if (!acc.includes(car.id)) {
//     if (car.id === action.payload.id) {
//       acc.push(action.payload)
//     } else {
//       acc.push(car)
//     }
//   }
//   return acc
// }, [])