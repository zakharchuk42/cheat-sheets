import Breadcrumb from './Breadcrumb.tsx'
import React from 'react'
import SidebarSwitcher from './SidebarSwitcher.tsx'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

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
			<SidebarSwitcher
				toggleOpen={toggleOpen}
				sidebarOpen={sidebarOpen}
			/>
		</header>
	)
}

export default Header
