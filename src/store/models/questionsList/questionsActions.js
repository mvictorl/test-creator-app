export const QUESTION_LIST_DONE = 'QUESTION_LIST_DONE'
export const ADD_QUESTION = 'ADD_QUESTION'

export const doneQuestionList = () => ({
  type: QUESTION_LIST_DONE
})

export const addQuestion = payload => ({
  type:ADD_QUESTION,
  payload
})

// export const thunkActionCreator5 = value => dispatch => {
//   dispatch(actionCreator5(value))
// }
