import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Title from '../../../../components/Typography'

interface JsLocalStorageProps {}

const JSLocalStorageExamples: React.FC<JsLocalStorageProps> = () => {
	return (
		<>
			<Title text="Приклад використання localStorage" />
			<SyntaxHighlighter language="javascript">
				{`// Записати дані
localStorage.setItem('username', 'john_doe');
localStorage.setItem('email', 'john_doe@example.com');

// Отримати дані
const username = localStorage.getItem('username');
const email = localStorage.getItem('email');

// Видалити один ключ
localStorage.removeItem('username');

// Перевірити, чи ключ ще існує
const checkUsername = localStorage.getItem('username');
console.log(checkUsername); // виведе null, оскільки ключ був видалений

// Очистити всі дані
localStorage.clear();

// Перевірити, чи ключі ще існують
const checkEmail = localStorage.getItem('email');
console.log(checkEmail); // виведе null, оскільки всі ключі були видалені
`}
			</SyntaxHighlighter>
		</>
	)
}

export default JSLocalStorageExamples
