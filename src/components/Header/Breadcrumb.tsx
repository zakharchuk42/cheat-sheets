import { Link } from 'react-router-dom'
import React from 'react'

interface BreadcrumbProps {
	pageName: string
	toMenu: string
}
const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName, toMenu }) => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center text-xs gap-2">
				<li className="flex gap-1">
					<Link to={toMenu}>Меню /</Link>
					{pageName && (
						<span className="text-gray-300">{pageName}</span>
					)}
				</li>
			</div>
		</div>
	)
}

export default Breadcrumb
