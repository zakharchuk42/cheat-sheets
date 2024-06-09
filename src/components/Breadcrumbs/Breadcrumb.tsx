import { Link } from 'react-router-dom'

interface BreadcrumbProps {
	pageName: string
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
	return (
		<div className="flex flex-col gap-3">
			<nav>
				<ol className="flex items-center text-xs gap-2">
					<li className="flex gap-1">
						<Link className="" to="/">
							JS /
						</Link>
						<span className="text-violet-400">{pageName}</span>
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default Breadcrumb
