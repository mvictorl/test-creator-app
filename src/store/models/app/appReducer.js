import { TOGGLE_TEST_PROGRESS, SWITCH_LOADING, TOGGLE_MENU } from './appActions'

const initialState = {
  isTestInProgress: false,
  loading: false,
  isMenuOpen: false
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
      case TOGGLE_MENU:
        return {
          ...state,
          isMenuOpen: !state.isMenuOpen
        }
    default:
      return state
  }
}

export default appReducer
