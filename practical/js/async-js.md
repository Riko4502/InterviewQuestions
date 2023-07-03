<h3>
  <span>Практические задачи по Async JS:</span>
</h3>

**Какая будет последовательность**
```js
const main = () => {
    const f1 = () => console.log("f1");
    const f2 = () => console.log("f2");
    const f3 = async () => console.log("f3");

    const f4 = async () => {
        console.log("f4");

        setTimeout(f1, 0);

        await f3();

        new Promise((res, rej) => {
            res("f5");
        }).then((r) => console.log(r));

        f2();
    };
    await f4();
}

main();

// f4  f3, f2, f5, f1
```

**Какая будет последовательность**
```js
const f4 = async () => {
    console.log("f4");
    setTimeout(f1, 0);
    
    f3().then(() => {
        new Promise((res, rej) => {
          res("f5");
        }).then((r) => console.log(r));
        f2();
    })
  };
```

**Какая будет последовательность**
```js
console.log("start");

const promise1 = Promise.resolve().then(() => {
    console.log("promise1");

    const timer2 = setTimeout(() => {
        console.log("timer2");
    }, 0);
});

const timer1 = setTimeout(() => {
    console.log("timer1");

    const promise2 = Promise.resolve().then(() => {
        console.log("promise2");
    });
}, 0);

console.log("end");

//start end promise1  timer1 promise2 timer2
```

**Какая будет последовательность**
```js
function print() {
    console.log(1);
};

function paint () {
    console.log(2);
};

setTimeout(() => console.log(3), 0);

async function foo() {
    console.log(4);
    await print();
    console.log(5);
    setTimeout(() => console.log(6), 0);
    await paint();
}

console.log(7);
foo();
console.log(8);
```

Ответ: // 7 4 1 5 2 8 3 6

**Какая будет последовательность**
```js
const a = setTimeout(() => console.log(2), 2000);
const d = setTimeout(() => console.log(6), 1000);

const c = new Promise( (resolve) => {
   setTimeout(() => resolve(), 1000);
   console.log(4);
});

c.then(() => console.log(1));

const b = setTimeout(() => console.log(5), 1000);

console.log(3);
```

<details><summary><b>Решение</b></summary>
<p>

// 4 3 6 1 5 2

</p>
</details>



**Какая будет последовательность**
```js
setTimeout(() => console.log(3), 2000);
console.log(4);

new Promise((res, rej) => {
    setTimeout(() => res());
})
    .then(() => console.log(1))
    .catch(() => console.log(2));

queueMicrotask(() => {
    console.log(5);
    queueMicrotask(() => {
        requestAnimationFrame(() => {
            console.log(8);
        });
        queueMicrotask(() => {
            console.log(7);
        });
    });
});

requestAnimationFrame(() => {
    console.log(3);
    requestAnimationFrame(() => {
        console.log(6);
    });
});

console.log(9);
```

**Какая будет последовательность**
```js
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'один');
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'два');
});

Promise.all([firstPromise, secondPromise])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.allSettled([firstPromise, secondPromise])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.any([firstPromise, secondPromise])
  .then(res => console.log(res))
  .catch(err => console.log(err));

Promise.race([firstPromise, secondPromise])
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

**Какая будет последовательность**
```js
try {
	new Promise((res) => {
		a++
		console.log(a);
		res(a);
	})
	.then(i => {
		console.log(i);
		a++;
		console.log(a);
		return a + i;
	})
	.catch((error) => {
		console.log(error)
		a++;
		return a;
	})
	.then((value) => console.log(value))
	.catch((error) => console.log(error));

	let a = 1;
} catch (e) {
	console.log(e);
}
```

<details><summary><b>Решение</b></summary>
<p>

Ответ: error 2 

</p>
</details>
 
**Какая будет последовательность**
```js
setTimeout(() => console.log(3), 2000);
console.log(4);

new Promise((res, rej) => {
	setTimeout(() => res());
})
    .then(() => console.log(1))
    .catch(() => console.log(2));

queueMicrotask(() => {
	console.log(5);
	queueMicrotask(() => {
		requestAnimationFrame(() => {
			console.log(8);
		});
		queueMicrotask(() => {
			console.log(7);
		});
	});
});

requestAnimationFrame(() => {
	console.log(3);
	requestAnimationFrame(() => {
		console.log(6);
	});
});

console.log(9);
```

<details><summary><b>Решение</b></summary>
<p>

Ответ: 4 9 5 7 3 8 1 6 3

</p>
</details>
 
