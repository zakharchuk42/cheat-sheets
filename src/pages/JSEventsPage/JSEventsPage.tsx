import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import JSEvents from '../../Modules/JSEvents'

const JSEventsPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('JavaScript events')
	}, [setTitle])

	return <JSEvents />
}

export default JSEventsPage
