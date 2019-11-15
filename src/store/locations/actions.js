import { BASE_URL, BASE_URL_HOME } from '../constants'
import { GET_ALL_LOCATIONS_PENDING, GET_ALL_LOCATIONS_FAILED, GET_ALL_LOCATIONS_SUCCESS } from './constants'
import axios from 'axios'

export const fetchLocations = () => {

  return dispatch => {
    dispatch({
      type: GET_ALL_LOCATIONS_PENDING
    })

    axios.get(`${BASE_URL}/locations`)
      .then(res => {
        dispatch({
          type: GET_ALL_LOCATIONS_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: GET_ALL_LOCATIONS_FAILED,
          payload: err
        })
      })
  }
}