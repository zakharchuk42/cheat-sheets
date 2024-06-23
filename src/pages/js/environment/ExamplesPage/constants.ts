export const codeExample = [
	{
		code: `var globalVar = 'I am global';

function displayGlobalVar() {
    console.log(globalVar);
}

displayGlobalVar(); // I am global
console.log(globalVar); // I am global
`,
	},
	{
		code: `function localScopeExample() {
    var localVar = 'I am local';
    console.log(localVar);
}

localScopeExample(); // I am local
console.log(localVar); // ReferenceError: localVar is not defined`,
	},
	{
		code: `if (true) {
    let blockVar = 'I am block-scoped';
    console.log(blockVar); // I am block-scoped
}

console.log(blockVar); // ReferenceError: blockVar is not defined
`,
	},
	{
		code: `function outerFunction() {
    var outerVar = 'I am outer';

    function innerFunction() {
        var innerVar = 'I am inner';
        console.log(outerVar); // I am outer
        console.log(innerVar); // I am inner
    }

    innerFunction();
    console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();
`,
	},
	{
		code: `function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
`,
	},
	{
		code: `function createCounters() {
    var counters = [];
    for (var i = 0; i < 5; i++) {
        (function(i) {
            counters.push(function() {
                return i;
            });
        })(i);
    }
    return counters;
}

const counters = createCounters();
console.log(counters[0]()); // 0
console.log(counters[1]()); // 1
console.log(counters[2]()); // 2
console.log(counters[3]()); // 3
console.log(counters[4]()); // 4
`,
	},
	{
		code: `function createPerson(name) {
    var personName = name;

    return {
        getName: function() {
            return personName;
        },
        setName: function(newName) {
            personName = newName;
        }
    };
}

const person = createPerson('John');
console.log(person.getName()); // John
person.setName('Doe');
console.log(person.getName()); // Doe
`,
	},
	{
		code: `function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(2)); // 7
console.log(add5(10)); // 15
`,
	},
	{
		code: `const CounterModule = (function() {
    let count = 0;

    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
console.log(CounterModule.getCount()); // 2
console.log(CounterModule.decrement()); // 1
`,
	},
]
