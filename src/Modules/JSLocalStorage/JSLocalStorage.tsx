import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface JsLocalStorageProps {}

const JSLocalStorage: React.FC<JsLocalStorageProps> = () => {
	return (
		<>
			<p>
				<span className="flex text-xl">
					Записати дані з localStorage
				</span>
				Щоб записати дані в localStorage, використовуйте метод setItem.
				Цей метод приймає два аргументи: ключ і значення.
			</p>
			<SyntaxHighlighter language="javascript">
				{`localStorage.setItem('key', 'value');`}
			</SyntaxHighlighter>
			<p>
				<span className="flex text-xl">
					Отримати дані з localStorage
				</span>
				Щоб отримати дані з localStorage, використовуйте метод getItem.
				Цей метод приймає один аргумент — ключ.
			</p>
			<SyntaxHighlighter language="javascript">
				{`const value = localStorage.getItem('key');`}
			</SyntaxHighlighter>
			<p>
				<span className="flex text-xl">
					Видалити дані з localStorage
				</span>
				Щоб видалити дані з localStorage, використовуйте метод
				removeItem. Цей метод приймає один аргумент — ключ.
			</p>
			<SyntaxHighlighter language="javascript">
				{`localStorage.removeItem('key');`}
			</SyntaxHighlighter>
			<p>
				<span className="flex text-xl">
					Очистити всі дані з localStorage
				</span>
				Щоб видалити всі дані з localStorage, використовуйте метод
				clear.
			</p>
			<SyntaxHighlighter language="javascript">
				{`localStorage.clear();`}
			</SyntaxHighlighter>
			<p>
				<span className="flex text-xl">
					Приклад використання localStorage
				</span>
				Щоб видалити всі дані з localStorage, використовуйте метод
				clear.
			</p>
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

export default JSLocalStorage
