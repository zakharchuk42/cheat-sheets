import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'

const JSEnvironmentExamplesPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Приклади')
	}, [setTitle])

	return <>JSEventLoopExamplesPage</>
}

export default JSEnvironmentExamplesPage
