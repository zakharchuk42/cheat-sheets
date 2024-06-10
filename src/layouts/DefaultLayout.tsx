import React, { ReactNode, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import { AppPages } from '../utils/constants/app-pages.ts'

interface Props {
	children: ReactNode
	title: string
	withHeader?: boolean
}

const DefaultLayout: React.FC<Props> = ({
	children,
	title,
	withHeader = true,
}) => {
	const { pathname } = useLocation()

	const isShowSidebar = pathname !== AppPages.MAIN

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(isShowSidebar)

	const toggleOpen = () => {
		setSidebarOpen((prevState) => !prevState)
	}

	const toMenu = `/${pathname.split('/')[1]}`

	return (
		<>
			<div className="flex h-screen overflow-hidden">
				{sidebarOpen && <Sidebar />}

				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{withHeader && (
						<Header
							toggleOpen={toggleOpen}
							sidebarOpen={sidebarOpen}
							title={title}
							toMenu={toMenu}
						/>
					)}
					<main className="h-full">
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
							{children}
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default DefaultLayout
