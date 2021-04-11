export const ANSWER_DONE = 'ANSWER_DONE'
export const SET_ANSWER_TEXT = 'SET_ANSWER_TEXT'
export const SET_ANSWER_CORRECT = 'SET_ANSWER_CORRECT'

export const doneAnswer = () => ({
  type: ANSWER_DONE
})

export const setAnswerText = payload => ({
  type: SET_ANSWER_TEXT,
  payload
})

export const setAnswerCorrect = payload => ({
  type:SET_ANSWER_CORRECT,
  payload
})
