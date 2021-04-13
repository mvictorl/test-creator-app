import React from 'react'
import {connect, useDispatch} from 'react-redux'
import { setTestCaption } from '../../store/models/test/testActions'
import CaptionTestInput from '../CommonInput/CommonInput'

const TestCaption = ({captionTest}) => {
  const dispatch = useDispatch()

	const setCaptionTest = val => {
		dispatch(setTestCaption(val))
	}

	return (
    <>
      <CaptionTestInput
        label="Название теста"
        cInputText={captionTest}
        cInputSetData={setCaptionTest}
      />
    </>
  )
}

const mapStateToProps = state => ({
	captionTest: state.test.captionTest
})

export default connect(mapStateToProps, null)(TestCaption)
