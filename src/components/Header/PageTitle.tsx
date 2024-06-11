import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const PageTitle: React.FC = () => {
	const location = useLocation()
	const { title } = useTitle()

	useEffect(() => {
		document.title = title
	}, [location, title])

	return null
}

export default PageTitle
