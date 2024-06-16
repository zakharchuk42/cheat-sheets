import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'

const JSEnvironmentPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Область видимості змінних, замикання')
	}, [setTitle])

	return <div>JSEnvironmentPage</div>
}

export default JSEnvironmentPage
