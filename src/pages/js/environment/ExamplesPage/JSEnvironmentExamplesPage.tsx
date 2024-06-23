import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { codeExample } from './constants.ts'

const JSEnvironmentExamplesPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Приклади')
	}, [setTitle])

	return (
		<>
			{codeExample.map((item, id) => {
				return (
					<React.Fragment key={id}>
						<strong>#{id + 1}</strong>
						<SyntaxHighlighter language="javascript">
							{item.code}
						</SyntaxHighlighter>
					</React.Fragment>
				)
			})}
		</>
	)
}

export default JSEnvironmentExamplesPage
