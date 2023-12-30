import React from 'react'

interface TypographyProps {
	children: string
}

export const Typography: React.FC<TypographyProps> = ({ children }) => {
	return <p className={'text-3xl font-bold'}>{children}</p>
}
