import React from 'react'

interface Props {
	toggleOpen: () => void
	sidebarOpen: boolean
}

const SidebarSwitcher: React.FC<Props> = ({ toggleOpen, sidebarOpen }) => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				className="sr-only peer"
				defaultChecked={sidebarOpen}
				onClick={toggleOpen}
			/>
			<div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
		</label>
	)
}

export default SidebarSwitcher
