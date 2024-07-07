import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'

const JSHowBrowserWork: React.FC = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Як працює браузер')
	}, [setTitle])

	return (
		<>
			<p>
				1. Після того як ввели адресу та натисли Enter браузер отримує
				<strong> http://site.com/index.hrml</strong>
				<br />
				<span
					style={{
						paddingLeft: '20px',
						display: 'block',
					}}
				>
					https , https, ws, wss - протокол
					<br />
					site.com - хост
					<br />
					index.html - ресурс
				</span>
			</p>
			<p>
				2. Отримавши <strong>хост</strong> завдяки DNS (Domain Name
				System, таблиця відповідності хост - IP) отримує IP адресу сайту
			</p>
			<p>
				3. Завдяки IP встановлюється <strong>TCP</strong> (Transmission
				Control Protocol) зʼєднання. У <strong>TCP</strong> є два порти
				для встановлення звʼязку: http: 80, https: 443
			</p>
			<p>
				4. Коли ТСР звʼязок встаовлений - йде обмін сертифікатами (для
				протоколу https). У випадку HTTPS відбувається TLS/SSL
				handshake, що включає в себе обмін сертифікатами і встановлення
				захищеного каналу.
			</p>
			<p>
				5. Поісля формужться <strong>HTTP Header</strong>:
				<span
					style={{
						paddingLeft: '20px',
						display: 'block',
					}}
				>
					method: GET, POST, PUT, DELETE, PATCH...
					<br />
					status code: 20x, 300x, 40x, 50x...
					<br />
					version: HTTP/1.1, HTTP/2, HTTP/3
					<br />
					host: site.com
					<br />
					інші заголовки (headers): User-Agent, Accept, Content-Type
					...
				</span>
			</p>
			<p>
				6. Якщо не має ніяких помилок повертається status 200 та html
				сторінка
			</p>
			<p>
				7. Браузер парсить HTML сторінку в декілька підходів:
				<span
					style={{
						paddingLeft: '20px',
						display: 'block',
					}}
				>
					- Лексичний аналіз (перетворення символів у токени): Браузер
					зчитує HTML-код і розбиває його на дрібніші частини -
					токени.
					<br />
					- Синтаксичний аналіз (перевірка верстки): Токени
					аналізуються для створення синтаксичного дерева (parse
					tree).
					<br />
					- Парсинг (формується дерево): Створюється DOM-дерево
					(Document Object Model), яке представляє структуру
					HTML-документа.
					<br />
					- Створюється DOM та CSSOM: CSSOM (CSS Object Model)
					створюється для відображення стилів.
					<br />- <strong>Rendering Trees</strong> (відображення на
					екран): DOM і CSSOM об'єднуються для створення
					рендеринг-дерева (Render Tree), яке використовується для
					відображення сторінки на екрані.
					<br />- Процес <strong>Reflow</strong> (браузер обчислює
					розміри та положення елементів на веб-сторінці) та{' '}
					<strong>Редроу (Repaint)</strong> (браузер перемальовує
					видимі зміни на веб-сторінці)
					<span
						style={{
							paddingLeft: '20px',
							display: 'block',
						}}
					>
						<strong>Reflow</strong>: Браузер обчислює розміри та
						положення елементів на веб-сторінці. <br />
						<strong>Repaint</strong>: Браузер перемальовує видимі
						зміни на веб-сторінці.
					</span>
					<br />- Формується веб-сторінка: Остаточний етап, коли
					веб-сторінка відображається користувачу.
				</span>
			</p>
		</>
	)
}

export default JSHowBrowserWork
