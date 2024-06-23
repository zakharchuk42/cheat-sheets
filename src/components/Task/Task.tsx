import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Button from '../Button'

interface TaskProps {
	code: string
	answer: string
	expl?: string
	id: number
}

const Task: React.FC<TaskProps> = ({ code, answer, expl, id }) => {
	const [isShowAnswer, setIsShowAnswer] = useState(false)

	const handleAnswer = () => {
		setIsShowAnswer(true)
	}

	return (
		<div className="pb-4">
			<strong>#{id + 1}</strong>
			<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<strong>Відповідь:</strong>
					{isShowAnswer ? (
						answer
					) : (
						<div
							key={id}
							className="w-[40px] h-[15px] rounded-sm bg-slate-300 mr-1 cursor-pointer"
						/>
					)}
				</div>
				<Button onClick={handleAnswer}>
					<svg
						width="14px"
						height="14px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M20.6097 5.20743C21.0475 5.54416 21.1294 6.17201 20.7926 6.60976L10.7926 19.6098C10.6172 19.8378 10.352 19.9793 10.0648 19.9979C9.77765 20.0166 9.49637 19.9106 9.29289 19.7072L4.29289 14.7072C3.90237 14.3166 3.90237 13.6835 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.90178 17.4876L19.2074 5.39034C19.5441 4.95258 20.172 4.87069 20.6097 5.20743Z"
							fill="rgb(34 197 94)"
						/>
					</svg>
					Показати відповідь
				</Button>
			</div>
			<p>{expl && isShowAnswer && <p>{expl}</p>}</p>
		</div>
	)
}

export default Task
