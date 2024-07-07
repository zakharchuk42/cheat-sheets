import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import Title from '../../../../components/Typography'
import EventLoop from '../../../../app/assets/event-loop.gif'
import AccentBlock from '../../../../components/AccentBlock'
import ExternalLink from '../../../../components/ExternalLink'

const JSEventLoopPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Event Loop')
	}, [setTitle])

	return (
		<>
			<Title text="Event Loop" />
			<p>
				<strong>Event Loop (або "цикл подій") у JavaScript</strong> — це
				механізм, який дозволяє мові виконувати асинхронні операції,
				наприклад, обробку подій, запити до серверу або затримки в часі,
				без блокування основного потоку виконання коду.
			</p>
			<p>
				Уявіть, що JavaScript виконує ваш код рядок за рядком. Коли
				зустрічається асинхронна операція, наприклад, запит до серверу
				або таймер, вона не зупиняє виконання всього коду, щоб чекати на
				результат. Замість цього JavaScript передає цю асинхронну
				операцію в чергу (queue) і продовжує виконувати інші команди.
			</p>
			<p>
				<strong>Call stack (Execution Context Stack)</strong> — це
				структура даних, яка зберігає інформацію про активні виконувані
				функції. Коли функція викликається, вона додається у верхню
				частину стека. Коли функція завершена, вона видаляється зі
				стека. Це працює як принцип LIFO (Last In, First Out), де
				остання додана функція є першою, яка виконується до кінця.
			</p>
			<p>
				<strong>Microtasks</strong> — це завдання, які виконуються після
				завершення поточної операції та перед початком наступного циклу
				подій. Мікротаски мають вищий пріоритет, ніж макротаски, і
				завжди виконуються до них. До мікротасок відносяться, наприклад,
				async/await, Promise.then(), Promise.catch(), queueMicrotask,
				process.nextTick() (в Node.js).
			</p>
			<p>
				<strong>Macrotasks</strong> — це завдання, які додаються до
				черги подій і виконуються після завершення всіх мікротасок
				поточного циклу подій. До макротасок відносяться, наприклад,
				setTimeout(), setInterval(), setImmediate().
			</p>
			<p>
				<strong>Web API</strong> - це набір асинхронних API, що
				надаються середовищем виконання (наприклад, браузером), який дає
				змогу виконувати такі завдання, як: робота з DOM, надсилання
				AJAX-запитів, установлення таймерів і багато іншого. Ці API не є
				частиною JS, але їх можна викликати з JavaScript.
			</p>
			<strong>Порядок виконання</strong>
			<ul>
				<li>
					1. Виконується основний потік коду + виконуються скрипти в
					тілі створення промісів
				</li>
				<li>
					2. Виконуються мікротаски. Мікротаски = проміси. Також є
					можливість примусово мікромізувати завдання за допомогою
					queueMicrotask(f). (Важливо пам'ятати, що виконуються ВСІ
					проміси)
				</li>
				<li>
					3. Виконується макротаска Макротаска - це у нас або
					браузерне API. Далі, цикл повторюється. Якщо основний потік
					пустий і мікрозадач теж немає, послідовно виконуються
					макротаски.
				</li>
			</ul>
			<img className="mt-4" src={EventLoop} alt="Event Loop Schema" />
			<p></p>
			<Title
				text="Call stack та Execution Context
					Stack"
			/>
			<p>
				Як такого поняття чи концепції <strong>Call stack</strong> в
				Java Script не існує. Цей термінь є калької з інших
				низькорівневих мов програмування де саме за допомогою логіки
				Call stack процессор виконує свої інструкції. За специфікацією
				JS працює за допомогою Execution Context Stack.
			</p>
			<p>
				<strong>Execution context</strong> - є абстрактною концепцією
				середовища, в якому виконується код. Кожен раз, коли виконується
				функція, скрипт чи блок коду, створюється новий контекст
				виконання.
			</p>
			<p>
				Ключова різниця між <strong>Call stack</strong> та{' '}
				<strong>Execution context stack</strong> у тому, що під час
				виконання глобального Main Execution context любий Execution
				context може бути замороженим (suspend), відкладеним на потім,
				видаленим зі stack на певний час, а потім повернутий назад в
				stack.
			</p>
			<AccentBlock>
				<strong>Джерело:</strong>{' '}
				<ExternalLink
					href={'https://www.youtube.com/live/CE0BhheYFQk'}
					text={
						'JavaScript и Call Stack согласно официальной спецификации'
					}
				/>
			</AccentBlock>
		</>
	)
}

export default JSEventLoopPage
