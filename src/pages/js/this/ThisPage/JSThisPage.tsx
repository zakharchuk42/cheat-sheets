import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import { useEffect } from 'react'
import AccentBlock from '../../../../components/AccentBlock'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Title from '../../../../components/Typography'

const JSThisPage = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('this')
	}, [setTitle])

	return (
		<>
			<p>
				<strong>this</strong> — це ключове слово, яке вказує на
				контекст, у якому виконується поточний код. this визначає, до
				якого об'єкта належать властивості або методи, які ви
				використовуєте в даний момент.
			</p>
			<AccentBlock>
				Весь код, який виконується в JS, працює в рамках певного
				оточення (environment). Коли ми запускаємо наш код, RunTime
				спочатку створює environment (environment зберігає налаштування,
				змінні, дані та інше) навколо нашого коду. Під час запуску коду,
				що можливе тільки під час виклику функції, спочатку створюється
				новий environment, навколо цієї функції, а потім вже йде
				виконання коду.
			</AccentBlock>
			<p>
				<strong>this</strong> - ідентифікатор, який залежить від того,
				як була запущена функція. Щоб зрозуміти що зберігає this, нам
				потрібно зрозуміти як викликається функція. Хост середовище
				(браузер, NodeJS) само визначає, що буде в this.
			</p>
			<SyntaxHighlighter language="javascript">{`// У NodeJS
console.log(this) // undefined або {}

// У браузері
console.log(this) // Window
`}</SyntaxHighlighter>
			<AccentBlock>
				В JavaScript глобальний об'єкт (Global Object) є об'єктом, який
				доступний у будь-якому місці вашого коду. В залежності від
				середовища виконання, цей глобальний об'єкт має різні назви та
				властивості:
			</AccentBlock>
			<p>
				У браузері:
				<br />
				<span
					style={{
						paddingLeft: '20px',
						display: 'block',
					}}
				>
					Глобальний об'єкт називається Window.
					<br />
					Він містить всі глобальні змінні та функції, а також багато
					властивостей та методів для роботи з веб-сторінкою
					(наприклад, document, location і т.д.).
				</span>
			</p>
			<p>
				У NodeJS:
				<br />
				<span
					style={{
						paddingLeft: '20px',
						display: 'block',
					}}
				>
					Глобальний об'єкт називається global.
					<br />
					Він містить всі глобальні змінні та функції, специфічні для
					серверного середовища Node.js (наприклад, process, Buffer,
					setTimeout і т.д.).
				</span>
			</p>
			<Title text="У функції" />
			<p>
				Під час виклику функцї this дорівнює тому, де знаходиться
				функція (де її створили).
			</p>
			<SyntaxHighlighter language="javascript">{`// У NodeJS
function func() {
\tconsole.log(this)
}

func()  // Global obj

// У браузері
function func() {
\tconsole.log(this)
}
func() // Window
`}</SyntaxHighlighter>
			<p>
				<strong>ВАЖЛИВО!</strong> У "use strict" this = undefined
			</p>
			<Title text="Функція як метод обʼєкту" />
			<SyntaxHighlighter language="javascript">{`// У браузері
const test = {
\tname: 'John',
\tsayHi(word) {
\t\tconsole.log(this)  // {name: 'John', sayHi: f}
\t\tconsole.log(word + ', ' + this.name)  // 'Hi, John'
\t}
}

test.sayHi('Hi')
`}</SyntaxHighlighter>
			<p>
				По суті, наша функція викликається "з обʼєкта", така поведінка
				називається дотанотацією. У даному випадку this буде дивитись на
				те, що стоїть перед крапкою. У нас це обʼєкт test
			</p>
			<p>
				Але, якщо нашу функцію призначити в змінну, а потім викликати -
				this буде Window
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi(word) {
\t\tconsole.log(this)
\t}
}

const myFunc = test.sayHi
myFunc() // Window
`}</SyntaxHighlighter>
			<Title text="Привʼязка this (call, apply, bind)" />
			<p>
				Методи call, apply та bind у JavaScript дозволяють змінювати
				контекст (this) функції. Основна різниця між ними полягає в
				тому, як вони приймають аргументи і коли викликають функцію.
			</p>
			<p>
				<strong>call</strong>. Метод call викликає функцію з вказаним
				значенням this і приймає аргументи, перераховані окремо.
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi(word, symb) {
\t\tconsole.log(word + ', ' + this.name + ' ' + symb)
\t}
}

const myFunc = test.sayHi
myFunc.call(test, 'Hi', '?') // Hi, John ?
`}</SyntaxHighlighter>
			<p>
				<strong>apply</strong>. Метод apply викликає функцію з вказаним
				значенням this і приймає аргументи у вигляді масиву.
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi(word, symb) {
\t\tconsole.log(word + ', ' + this.name + ' ' + symb)
\t}
}

const myFunc = test.sayHi
myFunc.apply(test, ['Hi', '?']) // Hi, John ?
`}</SyntaxHighlighter>
			<p>
				<strong>bind</strong>. Метод bind створює нову функцію з
				вказаним значенням this і, за необхідності, з фіксованими
				аргументами. Ця нова функція може бути викликана пізніше..
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi(word, symb) {
\t\tconsole.log(word + ', ' + this.name + ' ' + symb)
\t}
}

const myFunc = test.sayHi.bind(test, 'Goodbye')
myFunc('!') // Goodbye, John !

const myFunc1 = test.sayHi.bind(test, 'Goodbye', '!')
myFunc1() // Goodbye, John !
`}</SyntaxHighlighter>
			<Title text="Виклик функції як конструктора (new)" />
			<p>
				В JavaScript ключове слово <strong>new</strong> використовується
				для створення нових екземплярів об'єктів на основі
				конструкторських функцій або класів.
			</p>
			<AccentBlock>
				Функції конструктури прйнято називати з великої літери
			</AccentBlock>
			<SyntaxHighlighter language="javascript">{`function MyFunc() {
\tconsole.log(this) // {}
}
			
new MyFunc()
`}</SyntaxHighlighter>
			<p>Більше реальний приклад:</p>
			<SyntaxHighlighter language="javascript">{`function MyFunc(title, price) {
\tthis.title = title
\tthis.price = price
\tconsole.log(this) // { title: 'JS', price: 100.00}
}
			
new MyFunc('JS', 100.00)
`}</SyntaxHighlighter>
			<Title text="Стрілочні функції" />
			<p>
				У стрілочних функціях немає свого <strong>this</strong>. Під час
				виклику стрілочної функцї this дорівнює тому, де її викликали
				(дивиться на батьківську функцію)
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi: ()=> {
\t\tconsole.log(this)
\t}
}

// Виклик відбувається в глобальному середовищі

test.sayHi() // Window
test.sayHi.call(test) // Window

const func = test.sayHi
func() // Window
`}</SyntaxHighlighter>
			<p>
				Інший варіант. Якщо наша стрілочна функція була викликана у
				звичайній функції. Так як, стрілочна функція має{' '}
				<strong>this</strong> того environment де була викликана
				(батьківського), то у даному випадку стрілочна функція має той
				самий this що і sayHi.
			</p>
			<SyntaxHighlighter language="javascript">{`const test = {
\tname: 'John',
\tsayHi() {
\t\tconst showThis = () => {
\t\t\tconsole.log(this)
\t\t}

\t\tshowThis()
\t}
}

test.sayHi() // {name: 'John', sayHi: f}
`}</SyntaxHighlighter>
			<p>
				Чому так відбувається? Бо стрілочна функція по своїй суті - це
				синтаксичний цукор, і після транспіляції має вигляд:
			</p>
			<SyntaxHighlighter language="javascript">{`var test = {
\tname: 'John',
\tsayHi: function() {
\t\tvar _this = this;

\t\tvar showThis = function() {
\t\t\tconsole.log(_this);
\t\t};

\t\tshowThis();
\t}
};

test.sayHi(); // Виведе: { name: 'John', sayHi: [Function: sayHi] }
`}</SyntaxHighlighter>
			<p>
				Як бачите, транспілятор зберігає значення this за допомогою
				проміжної змінної (_this), щоб функція в showThis могла коректно
				використовувати this з контексту функції sayHi().
			</p>
		</>
	)
}

export default JSThisPage
