export const QUESTION_DONE = 'QUESTION_DONE'
export const SET_QUESTION_TEXT = 'SET_QUESTION_TEXT'
export const ADD_ANSWERS = 'ADD_ANSWERS'

export const doneQuestion = () => ({
  type: QUESTION_DONE
})

export const setQuestionText = payload => ({
  type: SET_QUESTION_TEXT,
  payload
})

export const addAnswers = payload => ({
  type: ADD_ANSWERS,
  payload
})

// export const thunkActionCreator5 = value => dispatch => {
//   dispatch(actionCreator5(value))
// }
