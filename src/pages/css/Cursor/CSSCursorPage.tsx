import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'

const CSSCursorPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Курсор')
	}, [setTitle])

	const cursors = [
		'auto',
		'default',
		'pointer',
		'text',
		'move',
		'wait',
		'help',
		'progress',
		'crosshair',
		'not-allowed',
		'no-drop',
		'all-scroll',
		'col-resize',
		'row-resize',
		'e-resize',
		'w-resize',
		'n-resize',
		's-resize',
		'ne-resize',
		'nw-resize',
		'se-resize',
		'sw-resize',
		'vertical-text',
		'inherit',
	]

	return (
		<div className="grid grid-cols-5 gap-4 p-5">
			{cursors.map((cursor) => (
				<div
					key={cursor}
					className="w-36 h-36 flex items-center justify-center border rounded-lg shadow-md bg-gray-100"
					style={{ cursor }}
				>
					{cursor}
				</div>
			))}
		</div>
	)
}

export default CSSCursorPage
