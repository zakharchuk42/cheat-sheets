import React, { useEffect } from 'react'
import JSEventLoopExamples from '../../Modules/JSEventLoop/components/JSEventLoopExamples'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSEventLoopExamplesPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Приклади')
	}, [setTitle])

	return <JSEventLoopExamples />
}

export default JSEventLoopExamplesPage
