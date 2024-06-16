import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { arrayMethods } from './constants.ts'

export const JSArrayMethodsPage: React.FC = () => {
	return (
		<SyntaxHighlighter language="javascript">
			{arrayMethods}
		</SyntaxHighlighter>
	)
}

export default JSArrayMethodsPage
