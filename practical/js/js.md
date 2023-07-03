<h3>
  <span>Практические задачи по JS:</span>
</h3>

**Функция проверки палиндрома?**

```js
function isPalindrome(str) {
  // Решение
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
```

<details><summary><b>Решение</b></summary>
<p>

```js
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```

</p>
</details>

**Функция поиска самого короткого слова?**

```js
function findShortestWord(str) {
  // Решение
}

console.log(findShortestWord('I love js')); // "I"
console.log(findShortestWord('Hello world')); // "world"
```

<details><summary><b>Решение</b></summary>
<p>

```js
function findShortestWord(str) {
  const words = str.split(' ');
  let shortestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
}
```

</p>
</details>

**Функция создания инициалов?**

```js
function createInitials(name) {
  // Решение
}

console.log(createInitials('John Doe')); // "JD"
console.log(createInitials('Alice Bob Cooper')); // "ABC"
```

<details><summary><b>Решение</b></summary>
<p>

```js
function createInitials(name) {
  const names = name.split(' ');
  const initials = names.map((name) => name[0].toUpperCase()).join('');
  return initials;
}
```

</p>
</details>

**Функция суммирования всех цифр числа?**

```js
function sumDigits(number) {
  // Решение
}

console.log(sumDigits(12345)); // 15
console.log(sumDigits(9876)); // 30
```

<details><summary><b>Решение</b></summary>
<p>

```js
function sumDigits(number) {
  const digits = number.toString().split('');
  const sum = digits.reduce((total, digit) => total + parseInt(digit), 0);
  return sum;
}
```

</p>
</details>

**Функция поиска минимального и максимального значений в массиве?**

```js
function findMinMax(arr) {
  // Решение
}

console.log(findMinMax([3, 7, 2, 9, 1])); // [1, 9]
console.log(findMinMax([-5, 0, 10, -2, 8])); // [-5, 10]
```

<details><summary><b>Решение</b></summary>
<p>

```js
function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}
```

</p>
</details>

**Функция создания набора дубликатов символов строки?**

```js
function createDuplicates(str) {
  // Решение
}

console.log(createDuplicates('hello')); // "hheelllloo"
console.log(createDuplicates('1234')); // "11223344"
```

<details><summary><b>Решение</b></summary>
<p>

```js
function createDuplicates(str) {
  const chars = str.split('');
  const duplicates = chars.map((char) => char + char).join('');
  return duplicates;
}
```

</p>
</details>

**Функция возврата индексов заглавных букв строки?**

```js
function findUpperCaseIndexes(str) {
  // Решение
}

console.log(findUpperCaseIndexes('HelloWorld')); // [0, 5]
console.log(findUpperCaseIndexes('js')); // [0, 4]
```

<details><summary><b>Решение</b></summary>
<p>

```js
function findUpperCaseIndexes(str) {
  const indexes = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      indexes.push(i);
    }
  }
  return indexes;
}
```

</p>
</details>

**Функция вывода чисел от 1 до n (n - передаваемый аргумент)**

```js
function printNumbers(n) {
 //Решение
}

printNumbers(5);
// Output:
// 1
// 2
// 3
// 4
// 5
```

<details><summary><b>Решение</b></summary>
<p>

```js
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

</p>
</details>

**Функция возврата уникальных значений из нескольких массивов?**

```js
function getUniqueValues(...arrays) {
  // Решение
}

console.log(getUniqueValues([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(getUniqueValues(['a', 'b', 'c'], ['b', 'c', 'd'], ['c', 'd', 'e'])); // ["a", "b", "c", "d", "e"]
```

<details><summary><b>Решение</b></summary>
<p>

```js
function getUniqueValues(...arrays) {
  const mergedArray = [].concat(...arrays);
  const uniqueValues = [...new Set(mergedArray)];
  return uniqueValues;
}
```

</p>
</details>


**Фунция сортировки даты и разделение на года**

```js
const opertions = [
  {'date': '2017-07-31'},
  {'date': '2017-06-30'},
  {'date': '2017-08-31'},
  {'date': '2018-03-31'},
  {'date': '2017-10-31'},
  {'date': '2018-02-28'},
];

function sortOperations(arr) {
  //Решение
}

console.log(sortOperations(opertions));

// Результат решения
const output = {
  '2017': [
    '06-30', '07-31', '08-31', '10-31'
  ],
  '2018' : [...],
}

```

<details><summary><b>Решение</b></summary>
<p>

```js
function sortOperations(arr) {
  const result = {};

  [...arr].sort((a, b) => new Date(a.date) - new Date(b.date));

  arr.forEach(el => {
      const date = el.date.split('-');
      const year = date[0];
      const strWithDate = `${date[1]}-${date[2]}`;

      if(result[year]) {
          result[year].push(strWithDate);
      } else {
          result[year] = [strWithDate]
      }
  });

  return result;
}
```

</p>
</details>

**Что выведет консоль**

```
var length = 4;

function callback () {
  console.log(this.length); // What is logger?
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2, 3, 5); // ?
```

<details><summary><b>Решение</b></summary>
<p>
Ответ: 5
</p>
</details>