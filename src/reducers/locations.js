import { GET_LOCATIONS_SUCCESS, GET_LOCATIONS_FAILED } from 'constants/ActionTypes'

const initialState = []

export default function locations(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS_SUCCESS:
      return {...state, locations: action.payload}
    case GET_LOCATIONS_FAILED:
      return []
    default:
      return state
  }
}
