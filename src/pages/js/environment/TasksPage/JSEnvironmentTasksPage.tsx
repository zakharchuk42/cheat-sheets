import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import LogicOperatorsTask from '../../../../components/Task/Task.tsx'
import { tasks } from './constants.ts'

const JSEnvironmentTasksPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі environment')
	}, [setTitle])

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

export default JSEnvironmentTasksPage
