import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import JSEnvironment from '../../Modules/JSEnvironment'

const JSEnvironmentPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Область видимості змінних, замикання')
	}, [setTitle])

	return <JSEnvironment />
}

export default JSEnvironmentPage
