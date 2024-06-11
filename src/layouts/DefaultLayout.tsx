import React, { ReactNode, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import PageTitle from '../components/Header/PageTitle.tsx'

interface Props {
	children: ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
	const { pathname } = useLocation()

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

	const toggleOpen = () => {
		setSidebarOpen((prevState) => !prevState)
	}

	const toMenu = `/${pathname.split('/')[1]}`

	return (
		<div className="flex h-screen overflow-hidden">
			{sidebarOpen && <Sidebar />}
			<PageTitle />
			<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
				<Header
					toggleOpen={toggleOpen}
					sidebarOpen={sidebarOpen}
					toMenu={toMenu}
				/>
				<main className="h-full">
					<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
						{children}
					</div>
				</main>
			</div>
		</div>
	)
}

export default DefaultLayout
