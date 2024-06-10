import { NavLink } from 'react-router-dom'
import React, { JSX, useState } from 'react'
import s from './main.module.scss'
import { mainPageLinksSettings } from './constants.tsx'

const Main: React.FC = () => {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
			{mainPageLinksSettings.map((link) => {
				return <LinkComponent link={link} key={link.to} />
			})}
		</div>
	)
}

function LinkComponent({
	link,
}: {
	link: {
		color: string
		title: string
		to: string
		icon: JSX.Element
		isDisabled?: boolean
	}
}) {
	const [isHovered, setIsHovered] = useState(false)

	const className = [s.link, link.isDisabled && s.disabled]
		.filter(Boolean)
		.join(' ')

	return (
		<NavLink
			to={link.to}
			className={className}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				color: link.color,
				border: `1px solid ${link.color}`,
				fill: link.color,
				...(isHovered && { background: link.color, color: 'white' }),
			}}
		>
			{link.title}
			{link.icon}
		</NavLink>
	)
}

export default Main
