import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'
import Title from '../../../components/Typography'
import AccentBlock from '../../../components/AccentBlock'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import ExternalLink from '../../../components/ExternalLink'

interface JsVariablesPageProps {}

const JSVariablesPage: React.FC<JsVariablesPageProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Змінні: var, let, const')
	}, [setTitle])

	return (
		<>
			<Title text="Змінна" />
			<p>
				Змінна — це іменований контейнер для зберігання даних, які
				можуть змінюватися під час виконання програми. (Посилання на
				область у памʼяті)
			</p>
			<Title text="Оголошення змінних" />
			<p>
				<strong>var</strong>: Змінні, оголошені за допомогою var, мають
				функціональну область видимості або глобальну, якщо оголошені
				поза функцією. Вони підлягають підняттю (hoisting).
			</p>
			<p>
				<strong>let</strong>: Змінні, оголошені за допомогою let, мають
				блочну область видимості (вони існують тільки в межах блоку {}),
				що робить їх більш передбачуваними. let також підлягає підняттю,
				але вони не доступні до фактичного оголошення (Temporal Dead
				Zone).
			</p>
			<AccentBlock>
				<strong>Temporal Dead Zone (TDZ)</strong> — це концепція в
				JavaScript, яка стосується блочної області видимості для
				змінних, оголошених за допомогою let та const. TDZ — це період
				часу від початку блоку до точки, де змінна оголошена та
				ініціалізована.
			</AccentBlock>
			<p>
				<strong>const</strong>: Подібно до <strong>let</strong>, змінні,
				оголошені за допомогою const, мають блочну область видимості.
				Однак значення, присвоєне const змінній, не може бути змінене
				після оголошення.
			</p>
			<Title text="Ключові відмінності let/const та var" />
			<p>
				При створенні змінних за допомогою <strong>let</strong> або{' '}
				<strong>const</strong> V8 автоматично до команди{' '}
				<strong>LdaImmutableCurrentContextSlot</strong> додає команду{' '}
				<strong>ThrowReferenceErrorIfHole</strong> за умови, якщо змінна
				будь-яким чином використовується в Temporal Dead Zone.
			</p>
			<AccentBlock>
				<strong>LdaImmutableCurrentContextSlot</strong> - це
				низькорівнева операція V8, яка відповідає за завантаження
				значень змінних, оголошених як const, let, var, з поточного
				контексту виконання. Вона є частиною внутрішньої реалізації
				engine JavaScript
			</AccentBlock>
			<p></p>
			<AccentBlock>
				<strong>ThrowReferenceErrorIfHole</strong> — це низькорівнева
				операція (instruction) у V8 для JavaScript, яка обробляє випадки
				доступу до змінних у Temporal Dead Zone.
			</AccentBlock>
			<p>
				У цьому випадку V8 в обовʼязковому порядку додасть
				ThrowReferenceErrorIfHole
			</p>
			<SyntaxHighlighter language="javascript">
				{`{
	// початок TDZ
	const show = () => console.log(l1)
	
	// кінець TDZ
	let test = 'text'
	
	show(test)
}`}
			</SyntaxHighlighter>
			<p>
				У цьому випадку V8 додавати ThrowReferenceErrorIfHole{' '}
				<strong>не буде</strong>
			</p>
			<SyntaxHighlighter language="javascript">
				{`{
	// початок TDZ
	const show = () => console.log(l1)
	
	// кінець TDZ
	var test = 'text' // замінили let на var
	
	show(test)
}`}
			</SyntaxHighlighter>

			<Title text="Вплиав ThrowReferenceErrorIfHole на продуктивність" />
			<p>
				Тести показують, що код, де застосовуються <strong>var</strong>{' '}
				замість <strong>const</strong> або <strong>let</strong> швидше
				на 5%.
			</p>
			<Title text="Ключова властивість const" />
			<p>
				<strong>const</strong> - це деректива, що створює умови для
				оптимізації компілятором TurboFan. <strong>const</strong> дає
				зрозуміти, що це значення буде точно не змінне, але потрібно
				памʼятати, що дана оптимізація працює лише на один рівень
				вкладоннесті.
			</p>
			<AccentBlock>
				<strong>TurboFan</strong> — це сучасний оптимізуючий компілятор,
				який є частиною engine V8 для JavaScript. Він був розроблений
				для поліпшення продуктивності JavaScript-коду шляхом створення
				високоефективного машинного коду.
			</AccentBlock>
			<p>У цьому коді TurboFan зробить свої оптимізації</p>
			<SyntaxHighlighter language="javascript">
				{`const b = 1
				
const calc = (a) => {
	return a + b
}

const a = 2

calc(a)
`}
			</SyntaxHighlighter>
			<p>А тут вже ні</p>
			<SyntaxHighlighter language="javascript">
				{`const b = 1
				
const calc = (a) => {
	return () => a + b
}

const a = 2

calc(a)
`}
			</SyntaxHighlighter>
			<AccentBlock>
				<strong>Джерело:</strong>{' '}
				<ExternalLink
					href="https://www.youtube.com/watch?v=msrbSSZQApI&ab_channel=AsForJS"
					text="Почему все неправильно используют var, let и const и при
					этом учат других поступать так же"
				/>
			</AccentBlock>
		</>
	)
}

export default JSVariablesPage
