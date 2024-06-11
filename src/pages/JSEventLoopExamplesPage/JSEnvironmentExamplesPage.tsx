import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import JSEnvironmentExamples from '../../Modules/JSEnvironment/components/JSEnvironmentExamples'

const JSEnvironmentExamplesPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Приклади')
	}, [setTitle])

	return <JSEnvironmentExamples />
}

export default JSEnvironmentExamplesPage
