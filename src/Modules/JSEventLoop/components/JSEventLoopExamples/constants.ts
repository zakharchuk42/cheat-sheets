export const codeExample = [
	{
		code: `console.log('start');

setTimeout(() => {
  console.log('macrotask');
}, 0);

console.log('end');
`,
		answer: `start => end => macrotask`,
	},
	{
		code: `console.log('start');

setTimeout(() => {
  console.log('macrotask');
}, 0);

Promise.resolve().then(() => {
  console.log('microtask');
});

console.log('end');
`,
		answer: `start => end => microtask => macrotask`,
	},
	{
		code: `console.log('start');

setTimeout(() => {
  console.log('first macrotask');

  Promise.resolve().then(() => {
    console.log('microtask inside first macrotask');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('first microtask');
});

setTimeout(() => {
  console.log('second macrotask');
}, 0);

console.log('end');
`,
		answer: `start => end => first microtask => first macrotask => microtask inside first macrotask => second macrotask`,
	},
	{
		code: `console.log('start');

setTimeout(() => {
  console.log('first macrotask');

  Promise.resolve().then(() => {
    console.log('first microtask inside first macrotask');
  });

  Promise.resolve().then(() => {
    console.log('second microtask inside first macrotask');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('first microtask');
});

setTimeout(() => {
  console.log('second macrotask');

  Promise.resolve().then(() => {
    console.log('microtask inside second macrotask');
  });
}, 0);

console.log('end');
`,
		answer: `start => end => first microtask => first macrotask => first microtask inside first macrotask => second microtask inside first macrotask => second macrotask => microtask inside second macrotask`,
	},
]
