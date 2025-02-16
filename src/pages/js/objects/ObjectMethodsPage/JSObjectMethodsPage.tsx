import React, { useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import Title from '../../../../components/Typography'

interface JsObjectProps {}

const JSObjectMethodsPage: React.FC<JsObjectProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Методи обʼєктів')
	}, [setTitle])
	return (
		<>
			<Title text="Object.assign()" />
			<p>
				{`Копіює властивості з одного або кількох об’єктів у цільовий об'єкт.`}
			</p>

			<SyntaxHighlighter language="javascript">
				{`const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }`}
			</SyntaxHighlighter>

			<Title text="Object.entries(obj)" />
			<p>
				{`Повертає масив [ключ, значення] для всіх власних властивостей.`}
			</p>

			<SyntaxHighlighter language="javascript">
				{`const obj = { a: 1, b: 2 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]`}
			</SyntaxHighlighter>

			<Title text="Object.fromEntries(iterable)" />
			<p>{`Перетворює масив пар [ключ, значення] у об'єкт.`}</p>

			<SyntaxHighlighter language="javascript">
				{`const entries = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }
`}
			</SyntaxHighlighter>

			<Title text="Object.groupBy(array, callback)" />
			<p>{`Групує елементи масиву за критерієм. (ES2023)`}</p>

			<SyntaxHighlighter language="javascript">
				{`const nums = [6, 2, 7, 3, 8];
console.log(Object.groupBy(nums, n => (n % 2 ? "odd" : "even")));
// { odd: [7, 3], even: [6, 2, 8] }
`}
			</SyntaxHighlighter>

			<Title text="Object.hasOwn(obj, prop)" />
			<p>{`Перевіряє, чи має об'єкт власну властивість.`}</p>

			<SyntaxHighlighter language="javascript">
				{`const obj = { a: 1 };
console.log(Object.hasOwn(obj, 'a')); // true
console.log(Object.hasOwn(obj, 'b')); // false
`}
			</SyntaxHighlighter>

			<Title text="Object.keys(obj)" />
			<p>{`Повертає масив ключів власних перелічуваних властивостей.`}</p>

			<SyntaxHighlighter language="javascript">
				{`const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ['a', 'b']
`}
			</SyntaxHighlighter>

			<Title text="Object.values(obj)" />
			<p>
				{`Повертає масив значень власних перелічуваних властивостей.`}
			</p>

			<SyntaxHighlighter language="javascript">
				{`const obj = { a: 1, b: 2 };
console.log(Object.values(obj)); // [1, 2]
`}
			</SyntaxHighlighter>
		</>
	)
}

export default JSObjectMethodsPage
