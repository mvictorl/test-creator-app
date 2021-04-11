import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './models/app/appReducer'
import testReducer from './models/test/testReducer'
import questionsReducer from './models/questionsList/questionsReducer'
import questionReducer from './models/question/questionReducer'
import answersReducer from './models/answersList/answersReducer'
import answerReducer from './models/answer/answerReducer'

const rootReducer = combineReducers({
  app: appReducer,
  test: testReducer,
  qList: questionsReducer,
  question: questionReducer,
  aList: answersReducer,
  answer: answerReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
