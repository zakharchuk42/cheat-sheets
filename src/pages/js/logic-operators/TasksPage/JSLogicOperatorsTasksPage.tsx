import React from 'react'
import { tasks } from './constants.ts'
import LogicOperatorsTask from '../../../../components/Task'

interface JsLogicOperatorsTasksProps {}

const JSLogicOperatorsTasksPage: React.FC<JsLogicOperatorsTasksProps> = () => {
	return (
		<>
			{tasks.map(({ code, answer, expl }, id) => {
				return (
					<LogicOperatorsTask
						code={code}
						answer={answer}
						expl={expl}
						id={id}
						key={id}
					/>
				)
			})}
		</>
	)
}

export default JSLogicOperatorsTasksPage
