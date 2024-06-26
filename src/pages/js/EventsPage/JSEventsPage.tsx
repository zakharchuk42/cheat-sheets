import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'
import { jsEvents } from './constants.ts'

const JSEventsPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('JavaScript events')
	}, [setTitle])

	return (
		<div className="flex flex-col gap-8">
			{jsEvents.map((item) => {
				return (
					<div
						className="flex flex-col md:flex-row md:items-center"
						key={item.text}
					>
						<div className="text-2xl font-bold w-[180px]">
							{item.name}
						</div>
						<div className="w-4/5">{item.text}</div>
					</div>
				)
			})}
		</div>
	)
}

export default JSEventsPage
