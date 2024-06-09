import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../app/assets/logo.svg'

interface Props {
	setSidebarOpen: (arg: boolean) => void
}

const Sidebar: React.FC<Props> = ({ setSidebarOpen }) => {
	return (
		<aside
			className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-white md:static md:w-75 translate-x-0`}
		>
			<div className="flex items-center justify-between gap-2 px-4 py-4">
				<NavLink to="/">
					<img src={Logo} alt="Logo" />
				</NavLink>
				<svg
					onClick={() => setSidebarOpen(false)}
					className={`w-6 h-6 text-gray-400 border border-gray-400 rounded-md cursor-pointer transition hover:border-gray-700 hover:text-gray-700 md:hidden`}
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
			</div>
			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				<nav>
					<div>
						<h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
							MENU
						</h3>

						<ul className="mb-6 flex flex-col gap-1.5">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
										(isActive && '!text-violet-600')
									}
								>
									Menu
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
