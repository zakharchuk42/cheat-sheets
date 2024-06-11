import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { arrayMethods } from './constants.ts'

export const JSArrayMethods: React.FC = () => {
	return (
		<SyntaxHighlighter language="javascript">
			{arrayMethods}
		</SyntaxHighlighter>
	)
}

export default JSArrayMethods
