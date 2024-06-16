export const arrayMethods = `const array = [1, 2, 3, 4];   // Початковий масив

array.at(1)                   // 2
array.push(5)                 // Додає елемент в кінець масиву: [1, 2, 3, 4, 5]
array.pop(5)                  // Видаляє останній елеменет: [1, 2, 3]
array.fill(1)                 // Перезаписує кожен елемент: [1, 1, 1, 1]
array.shift()                 // Видаляє першие елемент: [2, 3, 4]
array.unshift(5)              // Додає елемент у початок масиву: [5, 1, 2, 3, 4]
array.reverse()               // "Перевертає" масив: [4, 3, 2, 1]
array.includes(2)             // Чи є елемент в масиві: true
array.sort()                  // Сортує масив
array.slice(1, 4)             // Вирізає з масиув від індексу 1 до 4: [2, 3, 4]
array.join(' * ')             // Обʼєднує масив: '1 * 2 * 3 * 4'
array.map(item => 2*item)     // Створює новий масив: [2, 4, 6, 8]
array.forEach(item => item)   // Обходить масив, не створюючи новий
array.splice(2, 0, 'i', 'p')           // [1, 2, 'i', 'p', 3, 4]
array.find(item => item > 2)           // Знаходить елемент: 3 (перший відповідний)
array.every(item => item > 0)          // Кожен елемент більше 0: true
array.filter(item => item > 2)         // Відфільтровує елементи: [3, 4]
array.findIndex(item => item === 2)            // Повертає index першого ролевантного елементу: 1
array.indexOf(item => item === 2)              // Повертає index останнього ролевантного елементу: 1
array.reduce((acc, curr) => acc + curr, 0)     // 10
`
