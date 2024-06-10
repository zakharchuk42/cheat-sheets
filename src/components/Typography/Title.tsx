import React from 'react'

interface Props {
	text: string
}

const Title: React.FC<Props> = ({ text }) => {
	return (
		<>
			<h2 className="text-2xl font-bold">{text}</h2>
		</>
	)
}

export default Title
