import React from 'react'
import { useLocation } from 'react-router-dom'
import { menu } from '../../utils/constants/menu.ts'
import Logo from './Logo.tsx'
import MenuLink from './MenuLink.tsx'
import SocialsBlock from '../SocialsBlock'

const Sidebar: React.FC = () => {
	const { pathname } = useLocation()

	const keyMenu = pathname.split('/')[1]

	const currentMenu = menu[keyMenu]

	return (
		<aside
			className={`absolute left-0 top-0 z-50 border-r flex h-screen w-72 flex-col overflow-y-hidden bg-white md:static md:w-75 translate-x-0`}
		>
			<div className="flex items-center justify-center min-h-[81px] gap-2 px-4 md:px-6 2xl:px-10 py-4 border-b">
				<Logo />
			</div>
			<div className="no-scrollbar flex flex-col flex-grow overflow-y-auto p-4">
				<nav>
					<ul className="mb-6 flex flex-col gap-1.5">
						{currentMenu &&
							currentMenu.map((link) =>
								link.skip ? null : (
									<MenuLink
										key={link.to}
										link={link}
										keyMenu={keyMenu}
										pathname={pathname}
									/>
								)
							)}
					</ul>
				</nav>
			</div>
			<SocialsBlock />
		</aside>
	)
}

export default Sidebar
