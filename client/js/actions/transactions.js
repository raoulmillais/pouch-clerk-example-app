import * as types from '../constants/ActionTypes'
import * as DB from '../db'

export function addTransaction(cb) {
  return function(dispatch) {
    if ('geolocation' in navigator) {
      console.log('I haz geolocation')
      navigator.geolocation.getCurrentPosition(position => {
        console.log('I haz position', position)
        const { coords } = position
        const transaction = {
          clerk_state: {
            state: 'start'
          },
          pickup: {lat: coords.latitude, lng: coords.longitude}
        }

        const id = Date.now().toString()
        if (cb) { cb(id) }
        dispatch({ type: types.ADD_TRANSACTION, id, props: transaction })
      });
    } else {
      dispatch({type: types.ERROR, message: 'No geolocation'})
    }
  }
}

export function deleteTransaction(id) {
  return { type: types.DELETE_TRANSACTION, id }
}

export function editTransaction(id, props) {
  return { type: types.EDIT_TRANSACTION, id, props }
}
