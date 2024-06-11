import React, { useEffect } from 'react'
import Main from '../../Modules/Main'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const MainPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Глобальне меню')
	}, [setTitle])

	return <Main />
}

export default MainPage
