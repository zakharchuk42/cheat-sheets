import React, { useEffect } from 'react'
import { useTitle } from '../../../utils/helpers/TitleContext.tsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Title from '../../../components/Typography'

interface JsPrototypePageProps {}

const JSPrototypePage: React.FC<JsPrototypePageProps> = () => {
	const { setTitle } = useTitle()

	useEffect(() => {
		setTitle('Prototype, proto')
	}, [setTitle])

	return (
		<>
			<p>
				У JavaScript, __proto__ та prototype є ключовими поняттями в
				контексті об'єктно-орієнтованого програмування і прототипного
				наслідування.
			</p>
			<p>
				<strong>__proto__</strong> - це властивість, яка кожен об'єкт
				має у JavaScript. Вона посилається на прототип об'єкта, з якого
				він був створений. Властивість __proto__ є внутрішньою, але до
				неї можна отримати доступ для налаштування прототипного ланцюга.
			</p>
			<SyntaxHighlighter language="javascript">
				{`let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true, унаслідувано від animal
console.log(rabbit.jumps); // true, власна властивість`}
			</SyntaxHighlighter>
			<p>
				У цьому прикладі об'єкт rabbit успадковує властивість eats від
				об'єкта animal через __proto__.
			</p>
			<p>
				<strong>prototype</strong> - це властивість
				функцій-конструкторів. Кожна функція-конструктор у JavaScript
				має властивість prototype, яка використовується для створення
				__proto__ нових об'єктів при їхньому створенні за допомогою
				оператора new.
			</p>
			<SyntaxHighlighter language="javascript">
				{`function Animal() {}
Animal.prototype.eats = true;

let rabbit = new Animal();

console.log(rabbit.eats); // true, унаслідувано від Animal.prototype
`}
			</SyntaxHighlighter>
			<Title text="Взаємозв'язок між __proto__ та prototype" />
			<p>
				Коли створюється об'єкт за допомогою функції-конструктора, його
				__proto__ встановлюється в значення prototype цієї
				функції-конструктора. Наприклад:
			</p>
			<SyntaxHighlighter language="javascript">
				{`function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

let john = new Person("John");

console.log(john.__proto__ === Person.prototype); // true
john.greet(); // Hello, John
`}
			</SyntaxHighlighter>
			<Title text="Підсумок" />
			<p>
				<strong>__proto__</strong> - це властивість об'єкта, яка
				посилається на прототип об'єкта (батьківський об'єкт).
			</p>
			<p>
				<strong>prototype</strong> - це властивість
				функції-конструктора, яка використовується для створення
				__proto__ нових об'єктів.
			</p>
		</>
	)
}

export default JSPrototypePage
