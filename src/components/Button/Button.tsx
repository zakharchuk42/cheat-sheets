import React from 'react'

interface ButtonProps {
	children: React.ReactNode
	onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			className="flex items-center gap-2 border rounded-sm px-2 transition hover:bg-slate-100"
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
