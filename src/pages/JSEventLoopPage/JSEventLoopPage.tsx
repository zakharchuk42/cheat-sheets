import React, { useEffect } from 'react'
import JSEventLoop from '../../Modules/JSEventLoop'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSEventLoopPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Event Loop')
	}, [setTitle])

	return <JSEventLoop />
}

export default JSEventLoopPage
