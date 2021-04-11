import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const CommonInput = ({ label }) => {
  const [ inputValue, setInputValue ] = useState('')
  return (
    <TextField
      label={ label }
      fullWidth
      value={ inputValue }
      onChange={ e => setInputValue(e.target.value) }
    />
  )
}

export default CommonInput
