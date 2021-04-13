import React from 'react'
import TextField from '@material-ui/core/TextField'

const TestInput = () => {
	return (
		<TextField
			id="standard-helperText"
			label="Helper text"
			defaultValue="Default Value"
			helperText="Some important text"
		/>
	)
}

export default TestInput
