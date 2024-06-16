import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import { codeExample } from './constants.ts'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const JSEventLoopExamplesPage: React.FC = () => {
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
						<p>
							<strong>Порядок виклику</strong>: {item.answer}
						</p>
					</React.Fragment>
				)
			})}
		</>
	)
}

export default JSEventLoopExamplesPage
