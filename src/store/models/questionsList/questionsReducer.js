import { QUESTION_LIST_DONE, ADD_QUESTION } from './questionsActions'

const initialState = {
  isQuestionListDone: false,
  questions: []
}

function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case QUESTION_LIST_DONE:
      return {
        ...state,
        isQuestionListDone: true
      }
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.push(action.payload)
      }
    default:
      return state
  }
}

export default questionsReducer
