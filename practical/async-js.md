<h3>
  <span>Практические задачи по Async JS:</span>
</h3>

**Какая будет последовательность**
```
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
```
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
```
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