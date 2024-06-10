import React from 'react'
import { useLocation } from 'react-router-dom'
import { menu } from '../../utils/constants/menu.ts'
import Logo from './Logo.tsx'
import MenuLink from './MenuLink.tsx'

const Sidebar: React.FC = () => {
	const { pathname } = useLocation()

	const keyMenu = pathname.slice(1, 3)

	return (
		<aside
			className={`absolute left-0 top-0 z-50 border-r flex h-screen w-72 flex-col overflow-y-hidden bg-white md:static md:w-75 translate-x-0`}
		>
			<div className="flex items-center justify-center min-h-[81px] gap-2 px-4 md:px-6 2xl:px-10 py-4 border-b">
				<Logo />
			</div>
			<div className="no-scrollbar flex flex-col overflow-y-auto p-4">
				<nav>
					<ul className="mb-6 flex flex-col gap-1.5">
						{menu[keyMenu].map((link) => (
							<MenuLink
								key={link.to}
								link={link}
								keyMenu={keyMenu}
							/>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
