import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import carsReducer from './cars/reducer'
import locationsReducer from './locations/reducer'

const rootReducer = combineReducers({
  cars: carsReducer,
  locations: locationsReducer
})

const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))