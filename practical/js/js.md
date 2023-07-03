<h3>
  <span>Практические задачи по JS:</span>
</h3>

**Функция проверки палиндрома?**

```
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
```

**Функция поиска самого короткого слова?**

```
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

console.log(findShortestWord('I love JavaScript')); // "I"
console.log(findShortestWord('Hello world')); // "world"
```

**Функция создания инициалов?**

```
function createInitials(name) {
  const names = name.split(' ');
  const initials = names.map((name) => name[0].toUpperCase()).join('');
  return initials;
}

console.log(createInitials('John Doe')); // "JD"
console.log(createInitials('Alice Bob Cooper')); // "ABC"
```

**Функция суммирования всех цифр числа?**

```
function sumDigits(number) {
  const digits = number.toString().split('');
  const sum = digits.reduce((total, digit) => total + parseInt(digit), 0);
  return sum;
}

console.log(sumDigits(12345)); // 15
console.log(sumDigits(9876)); // 30
```

**Функция поиска минимального и максимального значений в массиве?**

```
function findMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

console.log(findMinMax([3, 7, 2, 9, 1])); // [1, 9]
console.log(findMinMax([-5, 0, 10, -2, 8])); // [-5, 10]
```

**Функция создания набора дубликатов символов строки?**

```
function createDuplicates(str) {
  const chars = str.split('');
  const duplicates = chars.map((char) => char + char).join('');
  return duplicates;
}

console.log(createDuplicates('hello')); // "hheelllloo"
console.log(createDuplicates('1234')); // "11223344"
```

**Функция возврата индексов заглавных букв строки?**

```
function findUpperCaseIndexes(str) {
  const indexes = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      indexes.push(i);
    }
  }
  return indexes;
}

console.log(findUpperCaseIndexes('HelloWorld')); // [0, 5]
console.log(findUpperCaseIndexes('JavaScript')); // [0, 4]
```

**Функция вывода чисел от 1 до n (n - передаваемый аргумент)**

```
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);
// Output:
// 1
// 2
// 3
// 4
// 5
```

**Функция возврата уникальных значений из нескольких массивов?**

```
function getUniqueValues(...arrays) {
  const mergedArray = [].concat(...arrays);
  const uniqueValues = [...new Set(mergedArray)];
  return uniqueValues;
}

console.log(getUniqueValues([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(getUniqueValues(['a', 'b', 'c'], ['b', 'c', 'd'], ['c', 'd', 'e'])); // ["a", "b", "c", "d", "e"]
```


**Фунция сортировки даты и разделение на года**

```
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

Решение 

```
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

***Ответ:*** **5**