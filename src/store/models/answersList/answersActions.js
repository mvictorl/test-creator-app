export const ANSWER_LIST_DONE = 'ANSWER_LIST_DONE'
export const ADD_ANSWER = 'ADD_ANSWER'

export const doneAnswerList = () => ({
  type: ANSWER_LIST_DONE
})

export const addAnswer = payload => ({
  type: ADD_ANSWER,
  payload
})
