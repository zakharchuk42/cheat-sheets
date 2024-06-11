import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import JSEnvironmentTasks from '../../Modules/JSEnvironment/components/JSEnvironmentTasks'

const JSEnvironmentTasksPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі')
	}, [setTitle])

	return <JSEnvironmentTasks />
}

export default JSEnvironmentTasksPage
