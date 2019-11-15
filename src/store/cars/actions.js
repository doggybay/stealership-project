import { BASE_URL, BASE_URL_HOME } from '../constants'
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
import axios from 'axios'


export const FetchCars = () => {

  return dispatch => {
    dispatch({
      type: GET_ALL_CARS_PENDING
    })

    axios.get(`${BASE_URL}/cars`)
      .then(res => {
        dispatch({
          type: GET_ALL_CARS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_CARS_FAILED,
          payload: err
        })
      })
  }
}

export const FetchOneCar = (carId) => {
  return dispatch => {
    dispatch({
      type: GET_ONE_CAR_PENDING
    })

    axios.get(`${BASE_URL}/cars/`)
      .then(res => {
        let car = res.data.filter(car => (car.id === Number(carId)))[0]
        dispatch({
          type: GET_ONE_CAR_SUCCESS,
          payload: car
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ONE_CAR_FAILED,
          payload: err
        })
      })

  }

}

export const AddNewCar = (newCar) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_CAR_PENDING
    })

    axios.post(`${BASE_URL}/cars`, newCar)
      .then(res => {
        dispatch({
          type: ADD_NEW_CAR_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: ADD_NEW_CAR_FAILED,
          payload: err
        })
      })
  }
}

export const DeleteCar = (carId) => {
  return dispatch => {
    dispatch({
      type: DELETE_CAR_PENDING
    })

    axios.delete(`${BASE_URL}/cars/${carId}`)
      .then(res => {
        dispatch({
          type: DELETE_CAR_SUCCESS,
          payload: carId
        })
      })
      .catch(err => {
        dispatch({
          type: DELETE_CAR_FAILED,
          payload: err
        })
      })
  }
}

export const EditCar = (id, updatedCar) => {
  return dispatch => {
    dispatch({
      type: EDIT_ONE_CAR_PENDING
    })
    console.log('before patch:', updatedCar)
    axios.patch(`${BASE_URL}/cars/${Number(id)}`, updatedCar)
      .then(res => {

        dispatch({
          type: EDIT_ONE_CAR_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: EDIT_ONE_CAR_FAILED,
          payload: err
        })
      })
  }
}

export const clearOneCarState = () => {
  return dispatch => {
    dispatch({
      type:CLEAR_ONECAR_STATE_PENDING
    })

    dispatch({
      type: CLEAR_ONECAR_STATE_SUCCESS,
      payload: {}
    })
  }
}