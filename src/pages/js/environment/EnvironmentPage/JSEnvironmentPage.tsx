import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import Title from '../../../../components/Typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Environment from '../../../../app/assets/lexical-environment.png'
import Environment2 from '../../../../app/assets/lexical-environment-2.png'

const JSEnvironmentPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Область видимості, замикання')
	}, [setTitle])

	return (
		<>
			<Title text="Блоки коду" />
			<p>
				Змінна, оголошена всередені блоку коду `{`{ це блок коду }`}` за
				допомогою <strong>let</strong> або <strong>const</strong>, буде
				доступна в межах цього блоку.
			</p>
			<SyntaxHighlighter language="javascript">
				{`{
let message = "Привіт"; // змінна видима тільки у цьому блоці
console.log(message); // Привіт
}

console.log(message); // Помилка: змінну message не було оголошено`}
			</SyntaxHighlighter>
			<p>
				Відсутність конфліктів/перезаписів, розділення змінних по зоні
				відповідальності
			</p>
			<SyntaxHighlighter language="javascript">
				{`{
let message = "Привіт";
console.log(message);
}

{
let message = "Бувай";
console.log(message);
}`}
			</SyntaxHighlighter>
			<p>Без блоків коду буде помилка, змінна вже оголошена</p>
			<Title text="Вкладені функції" />
			<p>
				Функція називається “вкладеною”, коли вона створюється всередині
				іншої функції.
			</p>
			<Title text="Лексичне середовище" />
			<p>
				У JavaScript кожен блок коду `{`{ це блок коду }`}` має
				внутрішній асоційований об’єкт, відомий як Лексичне середовище
				(Lexical Environment).
			</p>
			<p>Об’єкт лексичного середовища складається з двох частин:</p>
			<ul>
				<li>
					- Запис середовища (Environment Record) – об’єкт, який
					зберігає всі локальні змінні як властивості (та деяку іншу
					інформацію, наприклад значення this).
				</li>
				<li>
					- Посилання на зовнішнє лексичне середовище, яке пов’язане
					із зовнішнім кодом.
				</li>
			</ul>
			<p>
				<strong>"Змінна"</strong> - це властивість спеціального
				внутрішнього об’єкта.
			</p>
			<p>
				Коли код виконується, лексичне середовище змінюється.
				<img src={Environment} alt={'Environment'} />
			</p>

			<ul>
				<li>1.1 Оголошеними змінними.</li>
				<li>
					1.2 Спочатку вони перебувають у стані “Неініціалізовано”
					(Uninitialized). Особливий внутрішній стан, "енджін" знає
					про змінну, але на неї не можна посилатися, поки вона не
					буде оголошена з let. Це майже те саме, що змінної не існує.
				</li>
				<li>
					2. Оголошення змінної let phrase (undefined). Можемо
					використовувати.
				</li>
				<li>3. phrase присвоюється значення.</li>
				<li>4. phrase змінює значення.</li>
			</ul>
			<p>
				<strong>Лексичне середовище</strong> – це об’єкт специфікації:
				він існує лише “теоретично” в специфікації мови щоб показати, як
				все працює. Ми не можемо отримати цей об’єкт у нашому коді та
				керувати ним безпосередньо.
			</p>
			<p>
				Функція створена за допомогою Function Declaration,
				ініціалізується миттєво і повністю.
			</p>
			<p>
				Коли створюється лексичне середовище, така функція відразу стає
				готовою до використання (на відміну від значення у змінній let,
				що непридатна для викорстиння до оголошення).
			</p>
			<p>
				Функція відразу стає готовою до використання якщо вона створена
				за дпомогою <strong>Function Declaration</strong>
			</p>
			<SyntaxHighlighter language="javascript">
				{`function say(text) { ... } //  Function Declarations (працює)
const say = (text) => {...} //  Function Expressions (не працює)`}
			</SyntaxHighlighter>
			<Title text="Внутрішнє та зовнішнє лексичне середовище" />
			<p>
				Коли функція виконується, на початку виклику автоматично
				створюється нове лексичне середовище для зберігання локальних
				змінних та параметрів виклику.
				<img src={Environment2} alt={'Environment'} />
			</p>
			<p>
				Під час виклику функції у нас є два лексичні середовища:
				внутрішнє (для виклику функції) і зовнішнє (глобальне):
			</p>
			<p>Внутрішнє лексичне середовище має посилання на зовнішнє.</p>
			<p>
				Коли код хоче отримати доступ до змінної – спочатку шукає її у
				внутрішньому лексичному середовищі, потім у зовнішньому, потім у
				зовнішньому до попереднього і так далі поки не дійде до
				глобального.
			</p>
			<Title text="Замикання" />
			<p>
				<strong>Замикання</strong> – це функція, яка запам’ятовує свої
				зовнішні змінні та може отримати до них доступ.
			</p>
			<p>
				<strong>Замикання</strong> – це комбінація функції та лексичного
				середовища, у якому ця функція була оголошена.
			</p>
			<p>
				Функції запам’ятовують, де вони були створені, використовуючи
				властивість [[Environment]], а потім їхній код може отримати
				доступ до зовнішніх змінних.
			</p>
			<Title text="Збирання сміття" />
			<p>
				Об’єкт лексичного середовища зникає, коли стає недосяжним (як і
				будь-який інший об’єкт). Існує лише тоді, коли на нього
				посилається принаймні одна вкладена функція.
			</p>
			<SyntaxHighlighter language="javascript">
				{`function f() {
	let value = 123;
	
	return function() {
		alert(value);
	}
}

let g = f(); // поки функція g існує, значення залишається в пам’яті

g = null; // ...і тепер пам’ять очищена`}
			</SyntaxHighlighter>
		</>
	)
}

export default JSEnvironmentPage