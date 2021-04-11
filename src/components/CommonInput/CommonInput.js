import React, { useState } from 'react'

const CommonInput = () => {
  const [ inputValue, setInputValue ] = useState('')
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={null}
      />
    </div>
  )
}

export default CommonInput
