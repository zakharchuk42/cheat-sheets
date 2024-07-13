import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import { codeTasks } from './constants.ts'
import Task from './components/Task'

const JSEventLoopTasksPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі Event Loop')
	}, [setTitle])

	return (
		<>
			<p>
				<strong>Приклад відповіді:</strong> 123
			</p>
			{codeTasks.map((task, id) => {
				return <Task key={id} task={task} id={id} />
			})}
		</>
	)
}

export default JSEventLoopTasksPage
