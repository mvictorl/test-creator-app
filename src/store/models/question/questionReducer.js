import { QUESTION_DONE, SET_QUESTION_TEXT, ADD_ANSWERS } from './questionActions'

const initialState = {
  isQuestionDone: false,
  questionText: '',
  answers: []
}

function questionReducer(state = initialState, action) {
  switch (action.type) {
    case QUESTION_DONE:
      return {
        ...state,
        isQuestionDone: true
      }
    case SET_QUESTION_TEXT:
      return {
        ...state,
        questionText: action.payload
      }
    case ADD_ANSWERS:
      return {
        ...state,
        answers: action.payload
      }
    default:
      return state
  }
}

export default questionReducer
