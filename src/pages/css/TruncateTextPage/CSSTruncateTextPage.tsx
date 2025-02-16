import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import s from './styles.module.scss'
import Title from '../../../components/Typography'

const CSSTruncateTextPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Truncate text')
	}, [setTitle])

	return (
		<>
			<Title text="Truncated text" />
			<SyntaxHighlighter language="javascript">
				{`.truncated-text {
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

<div className="truncated-text">
	It is a long established fact that a reader will be distracted
	by the readable content of a page when looking at its layout.
</div>
`}
			</SyntaxHighlighter>
			<div className={s.variant1}>
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking at its layout.
			</div>
		</>
	)
}

export default CSSTruncateTextPage
