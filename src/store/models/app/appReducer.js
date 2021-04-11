import { TOGGLE_TEST_PROGRESS, SWITCH_LOADING } from './appActions'

const initialState = {
  isTestInProgress: false,
  loading: false
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TEST_PROGRESS:
      return {
        ...state,
        isTestInProgress: !state.isTestInProgress
      }
    case SWITCH_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export default appReducer
