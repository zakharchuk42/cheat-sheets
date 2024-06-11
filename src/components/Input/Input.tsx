import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface InputProps {
	value: string
	onChange: Dispatch<SetStateAction<string>>
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
	return (
		<input
			type="text"
			value={value}
			onChange={(event: ChangeEvent<HTMLInputElement>) =>
				onChange(event.target.value)
			}
		/>
	)
}

export default Input
