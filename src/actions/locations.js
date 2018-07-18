import { GET_LOCATIONS_SUCCESS, GET_LOCATIONS_FAILED } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'
import { locations } from 'mock-data/locations'
export const getLocationsSuccess = createAction(GET_LOCATIONS_SUCCESS)

export const getLocationsFailed = createAction(GET_LOCATIONS_FAILED)

export function getLocations() {
  return (dispatch, getState) => {
    // axios.get(api.getLocationsUrl).then(res=>{
    //
    // })
    dispatch(getLocationsSuccess(locations))
  }
}
