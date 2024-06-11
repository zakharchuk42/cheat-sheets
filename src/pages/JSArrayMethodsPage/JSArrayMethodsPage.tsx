import React, { useEffect } from 'react'
import JSArrayMethods from '../../Modules/JSArrayMethods'
import { useTitle } from '../../utils/helpers/TitleContext.tsx'

const JSArrayMethodsPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Методи масиву')
	}, [setTitle])

	return <JSArrayMethods />
}

export default JSArrayMethodsPage
