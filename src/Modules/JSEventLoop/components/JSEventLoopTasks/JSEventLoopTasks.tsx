import React from 'react'
import Task from './components/Task'
import { codeTasks } from './constants.ts'

const JSEventLoopTasks: React.FC = () => {
	return (
		<>
			{codeTasks.map((task, id) => {
				return <Task key={id} task={task} id={id} />
			})}
		</>
	)
}

export default JSEventLoopTasks
