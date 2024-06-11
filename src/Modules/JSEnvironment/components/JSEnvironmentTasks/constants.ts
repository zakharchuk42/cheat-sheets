export const codeTasks = [
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
`,
		answer: 132,
	},
	{
		code: `console.log(1);

Promise.resolve().then(() => {
  console.log(2);
});

console.log(3);
`,
		answer: 132,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);
`,
		answer: 1432,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });

}, 0);

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);
`,
		answer: 15234,
	},
	{
		code: `console.log(1);

Promise.resolve().then(() => {
  console.log(2);

  setTimeout(() => {
    console.log(3);
  }, 0);

});

Promise.resolve().then(() => {
  console.log(4);
});

console.log(5);
`,
		answer: 15243,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

setTimeout(() => {
  console.log(4);
}, 0);

Promise.resolve().then(() => {
  console.log(5);
});

console.log(6);
`,
		answer: 163524,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

Promise.resolve().then(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);
`,
		answer: 163425,
	},
	{
		code: `console.log(1);

Promise.resolve().then(() => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 0);
});

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);
`,
		answer: 15243,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => {
    console.log(5);
  }, 0);
});

console.log(6);
`,
		answer: 164235,
	},
	{
		code: `console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
    }, 0);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(5);
  setTimeout(() => {
    console.log(6);
    Promise.resolve().then(() => {
      console.log(7);
    });
  }, 0);
});

console.log(8);
`,
		answer: 18523674,
	},
]
