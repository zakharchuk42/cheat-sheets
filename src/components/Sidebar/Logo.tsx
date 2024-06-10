import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoImg from '../../app/assets/logo.svg'

const Logo: React.FC = () => {
	return (
		<NavLink to="/" className="flex gap-2 text-2xl font-bold">
			<img className="w-6" src={LogoImg} alt="Logo" />
			Cheat Sheets
		</NavLink>
	)
}

export default Logo
