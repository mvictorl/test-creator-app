export const TOGGLE_TEST_PROGRESS = 'TOGGLE_TEST_PROGRESS'
export const SWITCH_LOADING = 'SWITCH_LOADING'

export const toggleTestProgress = () => ({
  type: TOGGLE_TEST_PROGRESS
})

export const switchingLoading = (payload) => ({
  type: SWITCH_LOADING,
  payload
})

// export const thunkActionCreator5 = value => dispatch => {
//   dispatch(actionCreator5(value))
// }
