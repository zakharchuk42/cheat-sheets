import React, { useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { arrayMethods } from './constants.ts'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'

export const JSArrayMethodsPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Методи масивів')
	}, [setTitle])

	return (
		<SyntaxHighlighter language="javascript">
			{arrayMethods}
		</SyntaxHighlighter>
	)
}

export default JSArrayMethodsPage
