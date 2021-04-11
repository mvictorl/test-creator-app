export const TEST_DONE = 'TEST_DONE'
export const SET_TEST_CAPTION = 'SET_TEST_CAPTION'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export const doneTest = () => ({
  type: TEST_DONE
})

export const setTestCaption = payload => ({
  type: SET_TEST_CAPTION,
  payload
})

export const addQuestions = payload => ({
  type:ADD_QUESTIONS,
  payload
})

// export const thunkActionCreator5 = value => dispatch => {
//   dispatch(actionCreator5(value))
// }
