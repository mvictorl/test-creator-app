import { ANSWER_DONE, SET_ANSWER_TEXT, SET_ANSWER_CORRECT } from './answerActions'

const initialState = {
  isAnswerDone: false,
  answerText: '',
  isCorrect: false
}

function answerReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER_DONE:
      return {
        ...state,
        initialState: true
      }
    case SET_ANSWER_TEXT:
      return {
        ...state,
        answerText: action.payload
      }
    case SET_ANSWER_CORRECT:
      return {
        ...state,
        isCorrect: action.payload
      }
    default:
      return state
  }
}

export default answerReducer
