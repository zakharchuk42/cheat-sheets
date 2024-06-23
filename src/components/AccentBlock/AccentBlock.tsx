import React from 'react'

interface AccentBlockProps {
	children: React.ReactNode
}

const AccentBlock: React.FC<AccentBlockProps> = ({ children }) => {
	return <p className="bg-slate-100 p-5 rounded ">{children}</p>
}

export default AccentBlock
