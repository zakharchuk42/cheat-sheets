import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout.tsx'
import JSEventLoopTasks from '../../Modules/JSEventLoop/components/JSEventLoopTasks'

const JSEventLoopTasksPage: React.FC = () => {
	return (
		<DefaultLayout title="Event Loop | Задачі">
			<JSEventLoopTasks />
		</DefaultLayout>
	)
}

export default JSEventLoopTasksPage
