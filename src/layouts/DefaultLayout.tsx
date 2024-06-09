import React, { ReactNode, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

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
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
	const toggleOpen = () => {
		setSidebarOpen((prevState) => !prevState)
	}

	return (
		<>
			<div className="flex h-screen overflow-hidden">
				{sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}

				<div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{withHeader && (
						<Header
							toggleOpen={toggleOpen}
							sidebarOpen={sidebarOpen}
							title={title}
						/>
					)}
					<main>
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
