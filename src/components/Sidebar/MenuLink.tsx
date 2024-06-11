import React, { useEffect, useState } from 'react'
import s from './sidebar.module.scss'
import { NavLink } from 'react-router-dom'
import Doc from '../../app/assets/doc.svg'
import More from '../../app/assets/more-info.svg'
import { ILinks } from '../../utils/constants/menu.ts'
import { iconMapper } from './constants.tsx'

interface MenuLinkProps {
	link: ILinks
	keyMenu: string
	pathname: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ link, keyMenu, pathname }) => {
	const [isShowSubLinks, setIsShowSubLinks] = useState(false)

	useEffect(() => {
		const pathArr = link.to.split('/')
		const isActive = pathname.includes(pathArr[pathArr.length - 1])
		setIsShowSubLinks(isActive)
	}, [link.to, pathname])

	const classNames = (isActive: boolean): string =>
		`group relative flex font-medium duration-300 ease-in-out hover:text-yellow-500 ` +
		(isActive && '!text-yellow-500')

	return (
		<li className={s.wrapper}>
			<NavLink
				to={link.to}
				className={({ isActive }) => classNames(isActive)}
			>
				<span className="w-[16px] mr-2">{iconMapper[keyMenu]}</span>
				{link.title}
				{link.subLinks && (
					<span className="flex ml-1 w-[13px]">
						<img src={More} alt="More info" />
					</span>
				)}
			</NavLink>
			{link.subLinks && isShowSubLinks && (
				<ul className="ml-6">
					{link.subLinks.map((subLink) => (
						<li key={subLink.to}>
							<NavLink
								to={subLink.to}
								className={({ isActive }) =>
									classNames(isActive) + ' items-center'
								}
							>
								<span className="w-[12px] mr-1">
									<img src={Doc} alt="Document" />
								</span>
								{subLink.title}
							</NavLink>
						</li>
					))}
				</ul>
			)}
		</li>
	)
}

export default MenuLink
