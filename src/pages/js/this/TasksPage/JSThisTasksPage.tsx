import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import { useEffect } from 'react'
import Tasks from '../../../../components/Task'
import { thisTasks } from './constants.ts'

export const JSThisTasksPage = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі this')
	}, [setTitle])

	return (
		<>
			{thisTasks.map(({ code, answer }, id) => {
				return <Tasks code={code} answer={answer} id={id} key={id} />
			})}
		</>
	)
}

export default JSThisTasksPage
