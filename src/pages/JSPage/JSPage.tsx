import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Java Script')
	}, [setTitle])

	return <div>JS</div>
}

export default JSPage
