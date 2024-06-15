import React from 'react'
import { jsEvents } from './constants.ts'

export const JSEvents: React.FC = () => {
	return (
		<div className="flex flex-col gap-8">
			{jsEvents.map((item) => {
				return (
					<div className="flex flex-col md:flex-row md:items-center">
						<div className="text-2xl font-bold w-[160px]">
							{item.name}
						</div>
						<div className="w-4/5">{item.text}</div>
					</div>
				)
			})}
		</div>
	)
}

export default JSEvents
