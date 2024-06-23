export const tasks = [
	{
		code: `var a = 1;
{
    var a = 2;
}
console.log(a);`,
		answer: '2',
	},
	{
		code: `let b = 1;
{
    let b = 2;
}
console.log(b);`,
		answer: '1',
	},
	{
		code: `for (var i = 0; i < 3; i++) {}
console.log(i);`,
		answer: '3',
	},
	{
		code: `for (let j = 0; j < 3; j++) {}
console.log(j);`,
		answer: 'ReferenceError: j is not defined',
	},
	{
		code: `var c = 10;
if (true) {
    var c = 20;
}
console.log(c);`,
		answer: '20',
	},
	{
		code: `let d = 10;
if (true) {
    let d = 20;
}
console.log(d);`,
		answer: '10',
	},
	{
		code: `var e = 5;
function test() {
    var e = 10;
    console.log(e); // ?
}
test();
console.log(e); // ?`,
		answer: '10, 5',
	},
	{
		code: `let f = 5;
function test() {
    let f = 10;
    console.log(f); // ?
}
test();
console.log(f); // ?`,
		answer: '10, 5',
	},
	{
		code: `var g = 1;
function outer() {
    var g = 2;
    function inner() {
        console.log(g); // ?
    }
    inner();
}
outer();`,
		answer: '2',
	},
	{
		code: `let h = 1;
function outer() {
    let h = 2;
    function inner() {
        console.log(h); // ?
    }
    inner();
}
outer();`,
		answer: '2',
	},
	{
		code: `function test() {
    if (true) {
        var i = 1;
    }
    console.log(i); // ?
}
test();
`,
		answer: '1',
	},
	{
		code: `function test() {
    if (true) {
        let j = 1;
    }
    console.log(j); // ?
}
test();
`,
		answer: 'ReferenceError: j is not defined',
	},
	{
		code: `for (var k = 0; k < 3; k++) {
    setTimeout(() => console.log(k), 1000); // ?
}
`,
		answer: '3, 3, 3',
		expl: `Через область видимості var, змінна k стає глобальною і останнє значення k (яке дорівнює 3) буде використане у всіх викликах setTimeout.`,
	},
	{
		code: `for (let l = 0; l < 3; l++) {
    setTimeout(() => console.log(l), 1000); // ?
}`,
		answer: '0, 1, 2',
		expl: `let має блочну область видимості, тому кожна ітерація циклу має свою власну копію змінної l.`,
	},
	{
		code: `let m = 1;
{
    let m = 2;
    {
        let m = 3;
        console.log(m); // ?
    }
    console.log(m); // ?
}
console.log(m); // ?
`,
		answer: '3, 2, 1',
	},
	{
		code: `function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // ?
console.log(counter()); // ?
console.log(counter()); // ?
`,
		answer: '1, 2, 3',
	},
	{
		code: `function outer() {
    let outerVar = 'I am outer!';
    function inner() {
        console.log(outerVar); // ?
    }
    return inner;
}

const innerFunc = outer();
innerFunc();
`,
		answer: 'I am outer!',
	},
	{
		code: `function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // ?
console.log(add10(2)); // ?
`,
		answer: '7, 12',
	},
	{
		code: `function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(4)); // ?
console.log(triple(4)); // ?
`,
		answer: '8, 12',
	},
	{
		code: `function person(name) {
    let age = 0;
    return {
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        growOlder: function() {
            age++;
        }
    };
}

const john = person('John');
john.growOlder();
john.growOlder();
console.log(john.getName()); // ?
console.log(john.getAge()); // ?
`,
		answer: 'John, 2',
		expl: `Замикання дозволяє методам доступ до змінної age, яка залишається приватною в межах функції person.`,
	},
]
