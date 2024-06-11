import React, { useEffect } from 'react'
import JSEventLoopTasks from '../../Modules/JSEventLoop/components/JSEventLoopTasks'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSEventLoopTasksPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі')
	}, [setTitle])

	return <JSEventLoopTasks />
}

export default JSEventLoopTasksPage
