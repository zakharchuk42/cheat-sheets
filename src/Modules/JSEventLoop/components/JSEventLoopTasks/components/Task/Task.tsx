import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Input from '../../../../../../components/Input'
import Button from '../../../../../../components/Button'

interface TaskProps {
	task: {
		code: string
		answer: number
	}
	id: number
}

const Task: React.FC<TaskProps> = ({ task, id }) => {
	const [value, setValue] = useState('')
	const [message, setMessage] = useState('')
	const [isShowAnswer, setIsShowAnswer] = useState(false)

	const handleAnswer = () => {
		if (Number(value) === task.answer) {
			setIsShowAnswer(true)
			setMessage('Йой! Все вірно, ти молодець!')
		} else {
			setMessage('Ой, хибна відповідь.')
		}
	}

	const handleClear = () => {
		setValue('')
		setMessage('')
	}

	return (
		<>
			<strong>#{id + 1}</strong>
			<SyntaxHighlighter language="javascript">
				{task.code}
			</SyntaxHighlighter>
			<div className="flex flex-col gap-2 pb-4">
				<div className="flex gap-2">
					<strong>Відповідь:</strong>
					<Input value={value} onChange={setValue} />
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
					</Button>
					<Button onClick={handleClear}>
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
								d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
								fill="rgb(220 38 38)"
							/>
						</svg>
					</Button>
					{message.length ? message : ''}
				</div>
				<div className="flex items-center gap-2">
					<strong>Порядок виклику:</strong>
					{isShowAnswer ? (
						task.answer
					) : (
						<div
							key={id}
							className="w-[40px] h-[15px] rounded-sm bg-slate-300 mr-1 cursor-pointer"
							title="Показати відповідь"
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default Task
