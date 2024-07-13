export const thisTasks = [
	{
		code: `// Браузер
		
console.log(this);`,
		answer: 'window',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    return this.name;
  }
};

console.log(obj.getName());`,
		answer: 'Alice',
	},
	{
		code: `function showThis() {
  console.log(this);
}

showThis();`,
		answer: 'undefined (в строгому режимі) або window (в нестрогому режимі)',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: () => {
    return this.name;
  }
};

console.log(obj.getName());`,
		answer: 'undefined (стрілкова функція не має свого контексту this)',
	},
	{
		code: `const obj = {
  name: 'Alice',
  outer: function() {
    console.log(this.name);
    const inner = function() {
      console.log(this.name);
    };
    inner();
  }
};

obj.outer();`,
		answer: '1. Alice 2. undefined (в строгому режимі) або window.name (в нестрогому режимі)',
	},
	{
		code: `const obj1 = {
  name: 'Alice',
  getName: function() {
    return this.name;
  }
};

const obj2 = { name: 'Bob' };

console.log(obj1.getName.call(obj2));`,
		answer: 'Bob',
	},
	{
		code: `function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log(this.name);
  };
}

const alice = new Person('Alice');
alice.sayName();`,
		answer: 'Alice',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

obj.getName();`,
		answer: 'undefined (в строгому режимі) або window.name (в нестрогому режимі)',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    const that = this;
    setTimeout(function() {
      console.log(that.name);
    }, 1000);
  }
};

obj.getName();`,
		answer: 'Alice',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

obj.getName();`,
		answer: 'Alice',
	},
	{
		code: `function Person(name) {
  this.name = name;
}

const alice = Person('Alice');
console.log(alice);
console.log(window.name);`,
		answer: '1. undefined 2. Alice',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  }
};

const getName = obj.getName.bind({ name: 'Bob' });
getName();`,
		answer: 'Bob',
	},
	{
		code: `const obj = {
  name: 'Alice',
  getName: function() {
    console.log(this.name);
  },
  changeContext: function(newContext) {
    newContext.getName = this.getName;
    newContext.getName();
  }
};

obj.changeContext({ name: 'Bob' });`,
		answer: 'Bob',
	},
	{
		code: `class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

const alice = new Person('Alice');
const sayName = alice.sayName;
sayName();`,
		answer: 'undefined (в строгому режимі) або window.name (в нестрогому режимі)',
	},
	{
		code: `const obj1 = {
  name: 'Alice',
  getName: function() {
    return () => this.name;
  }
};

const obj2 = { name: 'Bob' };

const getName = obj1.getName.call(obj2);
console.log(getName());`,
		answer: 'Bob',
	},
]
