import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { codeExample } from './constants.ts'

const JSEventLoopExamples: React.FC = () => {
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

export default JSEventLoopExamples
