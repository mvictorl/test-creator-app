import React, { useState } from 'react'
import { TextField, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Edit, Done } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center'
	},
	input: {
		marginLeft: theme.spacing(1),
		marginTop: theme.spacing(3),
		flex: 1
	},
	iconButton: {
		padding: 10
	}
}))

const CommonInput = ({ cInputText, label, cInputSetData }) => {
	const classes = useStyles()
	const [inputValue, setInputValue] = useState(cInputText)
	const [isEdit, setIsEdit] = useState(true)

	return (
		<div className={classes.root}>
			<TextField
				className={classes.input}
				helperText={label}
				required
				fullWidth
				placeholder={`Введите ${label.toLowerCase()}`}
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				InputProps={{ readOnly: !isEdit }}
			/>
			{!isEdit ? (
				<Tooltip title="Редактировать" placement="top">
					<IconButton
						color="primary"
						className={classes.iconButton}
						onClick={() => setIsEdit(true)}
					>
						<Edit />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Сохранить" placement="top">
					<span>
					<IconButton
						color="primary"
						disabled={!inputValue}
						className={classes.iconButton}
						onClick={() => {
							setIsEdit(false)
							cInputSetData(inputValue)
						}}
					>
						<Done />
					</IconButton>
					</span>
				</Tooltip>
			)}
		</div>
	)
}

export default CommonInput
