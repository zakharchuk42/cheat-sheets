import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import Title from '../../../../components/Typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface JsLogicOperatorsPageProps {}

const LogicOperatorsPage: React.FC<JsLogicOperatorsPageProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Логічні оператори')
	}, [setTitle])

	return (
		<>
			<Title text="|| (АБО)" />
			<p>
				АБО "||" знаходить перше правдиве значення. Це означає, що
				оператор || опрацьовує аргументи доти, доки не досягається перше
				правдиве значення, після чого це значення негайно повертається,
				без подальшого опрацювання решти аргументів.
			</p>
			<SyntaxHighlighter language="javascript">
				{`console.log( true || true );     // true
console.log( true || false );    // true 
console.log( false || true );    // true 
console.log( false || false );   // false`}
			</SyntaxHighlighter>
			<Title text="&& (І)" />
			<p>
				Оператор І && повертає перше хибне значення, або останнє
				значення, якщо жодного хибного не було знайдено.
			</p>
			<SyntaxHighlighter language="javascript">
				{`// якщо перший операнд правдивий,
// І повертає другий операнд:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// якщо перший операнд хибний,
// І повертає саме його. Другий операнд ігнорується
console.log( null && 5 ); // null
console.log( 0 && "неважливо" ); // 0`}
			</SyntaxHighlighter>
			<Title text="! (НЕ)" />
			<p>Оператор приймає один аргумент і виконує наступне:</p>
			<ul>
				<li>- Перетворює операнд на булевий тип: true/false.</li>
				<li>- Повертає зворотне значення.</li>
			</ul>
			<SyntaxHighlighter language="javascript">
				{`console.log( !true ); // false
console.log( !0 ); // true`}
			</SyntaxHighlighter>
			<p>
				Подвійний НЕ !! іноді використовується для перетворення значення
				на булевий тип:
			</p>
			<SyntaxHighlighter language="javascript">
				{`alert( !!"не пустий рядок" ); // true
alert( !!null ); // false`}
			</SyntaxHighlighter>
			<Title text="Оператор об’єднання з null '??'" />
			<p>
				?? повертає перший аргумент, якщо він не null/undefined. Інакше,
				другий.
			</p>
			<p>
				Ми можемо переписати вираз result = a ?? b, використовуючи
				оператори, які ми вже знаємо:
			</p>
			<SyntaxHighlighter language="javascript">
				{`result = (a !== null && a !== undefined) ? a : b;`}
			</SyntaxHighlighter>
			<p>
				Наприклад, тут ми показуємо значення у змінній user, якщо її
				значення не null/undefined, інакше – показуємо Анонімний
			</p>
			<SyntaxHighlighter language="javascript">
				{`let user;

console.log(user ?? "Анонімний"); // Анонімний (user є undefined)`}
			</SyntaxHighlighter>
			<p>Важлива різниця між ними полягає в тому, що:</p>
			<ul>
				<li>- || повертає перше істинне значення.</li>
				<li>- ?? повертає перше визначене значення.</li>
			</ul>
			<p>
				Інакше кажучи, оператор || не розрізняє, чи значення false, 0,
				порожній рядок "" чи null/undefined. Всі вони однакові – хибні
				значення. Якщо будь-яке з них є першим аргументом ||, тоді ми
				отримаємо другий аргумент як результат.
			</p>
			<SyntaxHighlighter language="javascript">
				{`let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0`}
			</SyntaxHighlighter>
		</>
	)
}

export default LogicOperatorsPage
