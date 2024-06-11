export const example = `setTimeout(function timeout() {
 console.log('Timeout');
}, 0);

let p = new Promise(function(resolve, reject) {
 console.log('Created promise');
 resolve();
});

p.then(function(){
 console.log('Promise processing');
});

console.log('End');`

export const exampleSecond = `console.log(1); 

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);`
