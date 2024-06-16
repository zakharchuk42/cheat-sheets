import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'

const JSEnvironmentTasksPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Задачі')
	}, [setTitle])

	return <>JSEnvironmentTasksPage</>
}

export default JSEnvironmentTasksPage
