import React from 'react'
import { tasks } from './constants.ts'
import LogicOperatorsTask from './components/Task'

interface JsLogicOperatorsTasksProps {}

const JSLogicOperatorsTasksPage: React.FC<JsLogicOperatorsTasksProps> = () => {
	return (
		<>
			{tasks.map((task, id) => {
				return <LogicOperatorsTask task={task} id={id} />
			})}
		</>
	)
}

export default JSLogicOperatorsTasksPage
