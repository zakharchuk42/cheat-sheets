import React, { useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Title from '../../../components/Typography'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'

interface JsObjectProps {}

const JSObjectPage: React.FC<JsObjectProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Обʼєкти')
	}, [setTitle])
	return (
		<>
			<p>
				{`Об’єкт можна створити за допомогою фігурних дужок {…} з необов’язковим списком властивостей. Властивість – це пара “ключ: значення”, де ключ – це рядок (також називається “ім’я властивості”), а значення може бути будь-яким.`}
			</p>
			<p>
				Порожній об’єкт можна створити за допомогою одного з двох
				синтаксисів:
			</p>
			<SyntaxHighlighter language="javascript">
				{`let user = new Object(); // синтаксис "конструктора об’єктів"
let user = {};  // синтаксис "літералу об’єкта"`}
			</SyntaxHighlighter>
			<p>
				Властивість має ключ (також відомий як “ім’я” або
				“ідентифікатор”) перед двокрапкою ":" і значення праворуч від
				нього.
			</p>
			<SyntaxHighlighter language="javascript">
				{`let user = {     // об’єкт
  name: "Іван",  // за ключем "name" зберігаємо значення "Іван"
  age: 30        // за ключем "age" зберігати значення "30"
};`}
			</SyntaxHighlighter>
			<p>Щоб додати значення:</p>
			<SyntaxHighlighter language="javascript">
				{`user.isAdmin = true;`}
			</SyntaxHighlighter>
			<p>Щоб видалити значення:</p>
			<SyntaxHighlighter language="javascript">
				{`delete user.age;`}
			</SyntaxHighlighter>
			<p>
				Коли назва властивостей name і age збігаються з назвами змінних,
				які ми підставляємо як значення цих властивостей.
			</p>
			<SyntaxHighlighter language="javascript">
				{`function makeUser(name, age) {
  return {
    name, // те ж саме, що name: name
    age,  // те ж саме, що age: age
    // ...
  };
}`}
			</SyntaxHighlighter>
			<Title text="Перевірка існування властивості, оператор “in”" />
			<p>
				Читання відсутньої властивості просто повертає undefined. Тому
				ми можемо легко перевірити, чи існує властивість:
			</p>
			<SyntaxHighlighter language="javascript">
				{`let user = {};

console.log(user.noSuchProperty === undefined ); // true означає "такої властивості немає"`}
			</SyntaxHighlighter>
			<p>Для цього також є спеціальний оператор "in".</p>
			<SyntaxHighlighter language="javascript">
				{`let user = { name: "Іван", age: 30 };

console.log( "age" in user ); // true, user.age існує
console.log( "blabla" in user ); // false, user.blabla не існує`}
			</SyntaxHighlighter>
			<Title text={`Цикл "for..in"`} />
			<p>
				Для перебору всіх властивостей об’єкта використовується цикл
				for..in
			</p>
			<SyntaxHighlighter language="javascript">
				{`let user = {
  name: "Іван",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключі
  console.log( key );  // name, age, isAdmin
  // значення ключів
  console.log( user[key] ); // Іван, 30, true
}`}
			</SyntaxHighlighter>
			<Title text="Висновки" />
			<p>
				Об’єкти – це асоціативні масиви з рядом додаткових можливостей.
			</p>
			<p>
				Вони зберігають властивості (пари ключ-значення), де:
				<ul>
					<li>
						- Ключі властивостей повинні бути рядками або символами
						(зазвичай рядками).
					</li>
					<li>- Значення можуть бути будь-якого типу.</li>
				</ul>
			</p>
			<p>
				Щоб отримати доступ до властивості, ми можемо використовувати:
				<ul>
					<li>- Запис через крапку: obj.property.</li>
					<li>
						- Квадратні дужки obj["property"]. Квадратні дужки
						дозволяють взяти ключ зі змінної, наприклад,
						obj[varWithKey].
					</li>
				</ul>
			</p>
			<p>
				Додаткові оператори:
				<ul>
					<li>- Видалення властивості: delete obj.prop.</li>
					<li>- Перевірка існування властивості: "key" in obj.</li>
					<li>
						- Перебір властивостей об’єкта: цикл for (let key in
						obj).
					</li>
				</ul>
			</p>
		</>
	)
}

export default JSObjectPage
