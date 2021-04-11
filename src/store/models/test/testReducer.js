import { TEST_DONE, SET_TEST_CAPTION, ADD_QUESTIONS } from './testActions'

const initialState = {
  isTestDone: false,
  captionTest: '',
  questions: []
}

function testReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_DONE:
      return {
        ...state,
        isTestDone: true
      }
    case SET_TEST_CAPTION:
      return {
        ...state,
        captionTest: action.payload
      }
    case ADD_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    default:
      return state
  }
}

export default testReducer
