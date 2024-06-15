import React, { useEffect } from 'react'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'
import JSLocalStorage from '../../Modules/JSLocalStorage'

const JSLocalStoragePage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Local Storage')
	}, [setTitle])

	return <JSLocalStorage />
}

export default JSLocalStoragePage
