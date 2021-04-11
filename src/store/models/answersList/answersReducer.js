import { ANSWER_LIST_DONE, ADD_ANSWER } from './answersActions'

const initialState = {
  isAnswerListDone: false,
  answers: []
}

function answersReducer(state = initialState, action) {
  switch (action.type) {
    case ANSWER_LIST_DONE:
      return {
        ...state,
        isAnswerListDone: true
      }
    case ADD_ANSWER:
      return {
        ...state,
        answers: state.answers.push(action.payload)
      }
    default:
      return state
  }
}

export default answersReducer
