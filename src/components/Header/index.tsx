import PageTitle from '../PageTitle.tsx'
import Breadcrumb from '../Breadcrumbs/Breadcrumb.tsx'
import React from 'react'

interface Props {
	toggleOpen: () => void
	sidebarOpen: boolean
	title: string
}

const Header: React.FC<Props> = ({ toggleOpen, title, sidebarOpen }) => {
	return (
		<header className="sticky top-0 z-999 px-4 md:px-6 2xl:px-10 py-4 flex items-center gap-4 w-full bg-white drop-shadow-md">
			<svg
				onClick={toggleOpen}
				className={`w-6 h-6 text-gray-400 border border-gray-400 rounded-md cursor-pointer transition hover:border-gray-700 hover:text-gray-700 ${
					sidebarOpen ? '' : 'rotate-180'
				}`}
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="m15 19-7-7 7-7"
				/>
			</svg>

			<div className="flex flex-col flex-grow">
				<PageTitle title={title} />
				<h1 className="text-2xl font-bold">{title}</h1>
				<Breadcrumb pageName={title} />
			</div>
		</header>
	)
}

export default Header
