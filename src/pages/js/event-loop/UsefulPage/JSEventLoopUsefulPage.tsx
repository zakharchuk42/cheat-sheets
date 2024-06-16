import React, { useEffect } from 'react'
import { useTitle } from '../../../../utils/helpers/TitleContext.tsx'
import Title from '../../../../components/Typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { example, exampleSecond } from './constants.ts'

const JSEventLoopUsefulPage: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Рекомендації')
	}, [setTitle])

	return (
		<>
			<Title text="Рекомендація по вирішенню задач event loop" />
			<p>
				Для вирішення задча event loop рекомендую використовувати дану
				таблицю.
			</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="font-bold">Головний потік</div>
				<div className="font-bold">Microtask</div>
				<div className="font-bold">Macrotask</div>
			</div>
			<p>
				Давайте розберемо просту задачку з використанням нашої таблиці.
			</p>
			<SyntaxHighlighter language="javascript">
				{example}
			</SyntaxHighlighter>
			<p>
				Йдемо зверху-вниз, саме так, як це робить парсер нашого коду.
				Спочатку бачимо setTimeout, це макрозадача (браузерне API), і ми
				маємо її зареєструвати.
			</p>
			<SyntaxHighlighter language="javascript">
				{`setTimeout(function timeout() {console.log('Timeout');}, 0);`}
			</SyntaxHighlighter>
			<p>Занесемо цей скрипт в нашу табличку розом з часом timeout.</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div></div>
				<div></div>
				<div>Timeout</div>
			</div>
			<p>Далі у нас йде створення Promise.</p>
			<SyntaxHighlighter language="javascript">
				{`let p = new Promise(function(resolve, reject) {
 console.log('Created promise');
 resolve();
});`}
			</SyntaxHighlighter>
			<p>
				<strong>ВАЖЛИВО!</strong> Тут ми створюємо Promise,
				console.log('Created promise') виконається в головному потоці,
				нам не важливо, як завершиться проміс.
			</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">Timeout</div>
				<div>Created promise</div>
				<div></div>
				<div></div>
			</div>
			<p>
				А тут, ми бачимо, що наш проміс уже виконується, бачимо
				ланцюжок. Отже, це мікрозадача.
			</p>
			<SyntaxHighlighter language="javascript">
				{`p.then(function(){
 console.log('Promise processing');
});`}
			</SyntaxHighlighter>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">Timeout</div>
				<div className="border-b">Created promise</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div></div>
				<div>Promise processing</div>
				<div></div>
			</div>
			<p>Ну і останнє:</p>
			<SyntaxHighlighter language="javascript">
				{`console.log('end')`}
			</SyntaxHighlighter>
			<p>Ця задача виконується в головному потоці, туди її і запишем.</p>
			<div className="grid grid-cols-3 grid-rows-4 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">Timeout</div>
				<div className="border-b">Created promise</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">Promise processing</div>
				<div className="border-b"></div>
				<div>End</div>
				<div></div>
				<div></div>
			</div>
			<p>
				Тепер нам просто потрібно зібрати це у відповідь. Памʼятаємо про
				пріорітетність:
			</p>
			<ul>
				<li>- Головний потік (усі завдання)</li>
				<li>- Microtask (усі завдання)</li>
				<li>- Macrotask (по одному завданню)</li>
				<li>- Повторити</li>
			</ul>
			<p>
				<strong>Відповідь:</strong> Created promise, End, Promise
				processing, Timeout
			</p>
			<p>Давайте розглянемо ще один приклад</p>
			<SyntaxHighlighter language="javascript">
				{exampleSecond}
			</SyntaxHighlighter>
			<p>console.log(1) - головний потік</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div>console.log(1)</div>
				<div></div>
				<div></div>
			</div>
			<p>{`setTimeout(() => console.log(2))`} - макротаска</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div></div>
				<div></div>
				<div>console.log(2)</div>
			</div>
			<p>{`Promise.resolve().then(() => console.log(3))`} - мікротаска</p>
			<div className="grid grid-cols-3 border divide-x text-center">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(2)</div>
				<div></div>
				<div>console.log(3)</div>
				<div></div>
			</div>
			<SyntaxHighlighter language="javascript">
				{`Promise.resolve().then(() => setTimeout(() => console.log(4)))`}
			</SyntaxHighlighter>
			<p>
				Тут цікавіше, проміс породжує макрозадачу. При виконанні
				промісу, задача перейде в статус макрозадач. Поставимо стрілку
				куди перейде задача після виконання
			</p>
			<div className="grid grid-cols-3 border divide-x text-center box-border">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(2)</div>
				<div className="border-b"></div>
				<div className="border-b">console.log(3)</div>
				<div className="border-b"></div>
				<div></div>
				<div>console.log(4) {`->`}</div>
				<div></div>
			</div>
			<p>{`Promise.resolve().then(() => console.log(5))`} - мікротаска</p>
			<div className="grid grid-cols-3 border divide-x text-center box-border">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(2)</div>
				<div className="border-b"></div>
				<div className="border-b">console.log(3)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(4) {`->`}</div>
				<div className="border-b"></div>
				<div></div>
				<div>console.log(5)</div>
				<div></div>
			</div>
			<p>{`setTimeout(() => console.log(6))`} - макротаска</p>
			<div className="grid grid-cols-3 border divide-x text-center box-border">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(2)</div>
				<div className="border-b"></div>
				<div className="border-b">console.log(3)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(4) {`->`}</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(5)</div>
				<div className="border-b"></div>
				<div></div>
				<div></div>
				<div>console.log(6)</div>
			</div>
			<p>{`console.log(7)`} - головний потік</p>
			<div className="grid grid-cols-3 border divide-x text-center box-border">
				<div className="border-b font-bold">Головний потік</div>
				<div className="border-b font-bold">Microtask</div>
				<div className="border-b font-bold">Macrotask</div>
				<div className="border-b">console.log(1)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(2)</div>
				<div className="border-b"></div>
				<div className="border-b">console.log(3)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(4) {`->`}</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(5)</div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b"></div>
				<div className="border-b">console.log(6)</div>
				<div>console.log(7)</div>
				<div></div>
				<div></div>
			</div>
			<p>
				Тепер нам просто потрібно зібрати це у відповідь. Памʼятаємо про
				пріорітетність:
			</p>
			<ul>
				<li>- Головний потік (усі завдання)</li>
				<li>- Microtask (усі завдання)</li>
				<li>- Macrotask (по одному завданню)</li>
				<li>- Повторити</li>
			</ul>
			<p>
				<strong>Відповідь:</strong> 1,7,3,5,2,6,4
			</p>
			<p>
				Тут потрібно врахувати, що console.log(4) встане в кінець черги
				макрозадач. А там у нас уже знаходяться 2, 6, тому 4 йде в
				кінці.
			</p>
			<p>
				<strong>ВАЖЛИВО!</strong> Якщо мікрозадача (проміс) породжує
				макрозадачу (таймаут, інтервал), то макрозадача займає свою
				чергу в колонці Macrotask та буде чекати своєї черги. Але якщо
				макрозадача (таймер, інтервал) породжує мікрозадачу (проміс), то
				у такому вападку мікрозадача (проміс) виконується негайно.
			</p>
		</>
	)
}

export default JSEventLoopUsefulPage
