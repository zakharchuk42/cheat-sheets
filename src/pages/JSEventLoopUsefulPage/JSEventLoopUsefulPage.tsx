import React, { useEffect } from 'react'
import JSEventLoopUseful from '../../Modules/JSEventLoop/components/JSEventLoopUseful'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSEventLoopUsefulPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Рекомендації')
	}, [setTitle])

	return <JSEventLoopUseful />
}

export default JSEventLoopUsefulPage
