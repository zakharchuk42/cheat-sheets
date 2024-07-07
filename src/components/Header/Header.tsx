import Breadcrumb from './Breadcrumb.tsx'
import React from 'react'
import SidebarSwitcher from './SidebarSwitcher.tsx'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import git from '../../app/assets/git.svg'
import li from '../../app/assets/li.svg'

interface Props {
	toggleOpen: () => void
	sidebarOpen: boolean
	toMenu: string
}

const Header: React.FC<Props> = ({ toggleOpen, sidebarOpen, toMenu }) => {
	const { title } = useTitle()

	return (
		<header className="sticky top-0 z-999 px-4 md:px-6 2xl:px-10 py-4 flex items-center gap-4 w-full bg-white border-b">
			<div className="flex flex-col flex-grow">
				<h1 className="text-2xl font-bold">{title}</h1>
				<Breadcrumb pageName={title} toMenu={toMenu} />
			</div>
			<div className="flex gap-6">
				<div className="flex gap-2">
					<a href="https://github.com/zakharchuk42" target="_blank">
						<img className="w-8" src={git} alt="GitHub" />
					</a>
					<a
						href="https://www.linkedin.com/in/vit-zakharchuk/"
						target="_blank"
					>
						<img className="w-8" src={li} alt="GitHub" />
					</a>
				</div>
				<SidebarSwitcher
					toggleOpen={toggleOpen}
					sidebarOpen={sidebarOpen}
				/>
			</div>
		</header>
	)
}

export default Header
