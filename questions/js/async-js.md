<h3>
  <span>Async JS:</span>
</h3>

**Разница между синхронными и асинхронными функциями?**

Синхронные функции выполняются последовательно, шаг за шагом. Каждая операция в синхронной функции должна завершиться, прежде чем выполнится следующая операция. Во время выполнения синхронной функции поток выполнения блокируется, и программа ждет завершения каждой операции.

Асинхронные функции, напротив, не блокируют поток выполнения. Они запускаются, выполняют некоторую задачу в фоновом режиме и возвращают управление вызывающему коду без ожидания завершения задачи. По завершении асинхронной операции вызывается соответствующий обратный вызов (callback) или выполняется другое определенное действие.

**Что такое AJAX?**

AJAX (Asynchronous JavaScript and XML) - это подход, который позволяет веб-страницам взаимодействовать с сервером асинхронно. С помощью AJAX можно отправлять асинхронные запросы на сервер, получать данные с сервера без перезагрузки страницы и обновлять содержимое страницы динамически.

AJAX использует различные веб-технологии, такие как JavaScript, XMLHttpRequest (XHR) и XML или JSON для обмена данными с сервером. Однако в современных приложениях AJAX часто использует не только XML, но и другие форматы данных, такие как JSON или HTML.

**Что такое same-origin policy в контексте JavaScript?**

Same-origin policy (политика одного источника) - это безопасностное ограничение веб-браузеров, которое запрещает JavaScript-коду получать доступ к ресурсам (таким как DOM, cookies или localStorage) на другом домене (протоколе, порту) без явного разрешения. Это ограничение помогает предотвратить атаки, связанные с межсайтовым скриптингом (cross-site scripting) и межсайтовой подделкой запросов (cross-site request forgery).

**Что такое цикл событий (event loop) и как он работает?**

Цикл событий (event loop) - это механизм в JavaScript, который позволяет обрабатывать асинхронные события и выполнение кода. Он отвечает за получение событий из очереди событий (event queue) и их последовательную обработку.

Работа цикла событий включает следующие шаги:

1. Ожидание и получение событий из очереди событий.
2. Выполнение обработчиков событий по одному.
3. Если в процессе выполнения обработчика возникли новые асинхронные операции (например, таймеры, запросы AJAX), они добавляются в соответствующие очереди.
4. Когда текущий обработчик завершается или блокируется, цикл событий выбирает следующее событие из очереди и выполняет его обработку.

**Разница между микро и макрозадачами в event loop?**

Микрозадачи (**microtasks**) и макрозадачи (**macrotasks**) - это два различных типа задач, которые могут быть поставлены в очередь цикла событий.

Микрозадачи обрабатываются перед следующим событием рендеринга браузера. Это позволяет им выполняться максимально быстро. Примерами микрозадач могут быть промисы (**Promises**) и задачи, запланированные с помощью метода **queueMicrotask()**.

Макрозадачи обрабатываются после всех микрозадач и перед следующим событием рендеринга. К макрозадачам относятся обработчики событий, таймеры (**setTimeout**, **setInterval**) и запросы на анимацию (**requestAnimationFrame**).

**Расскажите о queueMicrotask?**

**queueMicrotask()** - это метод, позволяющий поставить микрозадачу в очередь цикла событий. Он принимает функцию в качестве аргумента и помещает ее в очередь микрозадач для последующего выполнения.

**Что такое промисы (Promises)?**

Промисы - это объекты в JavaScript, представляющие результат успешного или неуспешного завершения асинхронной операции. Промисы используются для работы с асинхронными операциями, чтобы обрабатывать результат или ошибку, когда они становятся доступными.

**Плюсы и минусы использовании Ajax?**

Плюсы использования Ajax:

- Обновление части страницы без полной перезагрузки.
- Асинхронное взаимодействие с сервером, что улучшает отзывчивость и производительность пользовательского интерфейса.
- Возможность отправки и получения данных в фоновом режиме без прерывания работы пользователя.
- Использование серверных ресурсов более эффективно благодаря меньшей передаче данных.

Минусы использования Ajax:

- Ограничения политики одного источника (same-origin policy), которые могут запрещать доступ к ресурсам на других доменах.
- При отключенном JavaScript функциональность Ajax не будет работать.
- Необходимость управления состоянием приложения в случае множественных асинхронных запросов.

**Подходы при работе с асинхронным кодом?**

При работе с асинхронным кодом в JavaScript можно использовать различные подходы:

**Callbacks (колбэки)**: Использование функций обратного вызова для обработки результата асинхронной операции. Однако такой подход может привести к проблеме "**Callback Hell**" (ад на колбэки), когда вложенность колбэков становится сложной для понимания и поддержки.

Промисы (**Promises**): Использование объектов промисов для представления асинхронной операции и обработки ее результата или ошибки. Промисы позволяют более линейно и структурированно описывать цепочки асинхронных операций.
**async/await**: Введение ключевых слов **async** и **await**, которые позволяют писать асинхронный код так, как будто он синхронный. **async** указывает, что функция содержит асинхронный код, а **await** приостанавливает выполнение функции до завершения промиса и возвращает его результат.

**Преимущества использовании промисов вместо колбэков?**

Использование промисов вместо колбэков предоставляет следующие преимущества:

Более читабельный и линейный код: 
Промисы позволяют писать код в виде цепочек, что делает его более читабельным и легким для понимания.

Удобная обработка ошибок: 
Промисы имеют встроенный механизм для обработки ошибок в цепочках. Это упрощает и улучшает обработку ошибок в асинхронном коде.

Более гибкий контроль выполнения: Промисы предоставляют методы для управления выполнением асинхронных операций, такие как **Promise.all()**, **Promise.race()** и **Promise.any()**, что дает больше гибкости в работе с несколькими промисами.
Возможность использования async/await: Промисы легко интегрируются с **async/await** и делают асинхронный код более синхронным и понятным.

**Что такое callback-функция? Что такое Callback Hell?**

Callback-функция (колбэк-функция) - это функция, которая передается в другую функцию в качестве аргумента и будет вызвана позднее при завершении определенной операции.

Callback Hell (ад на колбэки) - это ситуация, когда асинхронный код содержит множество вложенных колбэков, что делает код сложным для чтения, поддержки и отладки. Это происходит, когда каждая асинхронная операция зависит от результатов предыдущей операции.

**Что такое async/await?**

Async/await - это синтаксический сахар в JavaScript, который позволяет писать асинхронный код в более синхронном стиле. Ключевое слово async указывает, что функция содержит асинхронный код, а await приостанавливает выполнение функции до завершения промиса и возвращает его результат.

**Разница между Promise.all(), Promise.any() и Promise.race()?**

**Promise.all()**: Принимает массив промисов и возвращает новый промис, который выполнится, когда все промисы в массиве будут выполнены. Возвращаемое значение - массив с результатами всех промисов в порядке их следования.

**Promise.any()**: Принимает массив промисов и возвращает новый промис, который выполнится, когда хотя бы один промис из массива будет выполнен. Возвращаемое значение - результат первого выполненного промиса.

**Promise.race()**: Принимает массив промисов и возвращает новый промис, который выполнится, когда первый промис из массива будет выполнен или отклонен. Возвращаемое значение - результат или ошибка первого выполненного или отклоненного промиса.

**Расскажите про статический метод .allSettled()?**

**Promise.allSettled()** - это статический метод промиса, который принимает массив промисов и возвращает новый промис, который выполнится, когда все промисы в массиве завершатся (успешно или с ошибкой). Возвращаемое значение - массив объектов, содержащих результаты или ошибки для каждого промиса.

**Плюсы и минусы асинхронного программирования в JavaScript?**

Плюсы асинхронного программирования в JavaScript:
- Улучшение отзывчивости и производительности приложений.
- Возможность выполнять долгие операции в фоновом режиме, не блокируя основной поток выполнения.
- Лучшее использование ресурсов и масштабируемость.

Минусы асинхронного программирования в JavaScript:
- Усложнение логики и структуры кода.
- Необходимость управления состоянием и обработкой ошибок.
- Потенциальная проблема асинхронных гонок (race conditions) при несогласованной работе с общими данными.

**Проблемы при использовании callback-функций?**

Некоторые проблемы, связанные с использованием callback-функций:

- Callback Hell: Вложенность колбэков может сделать код сложным для чтения и поддержки.
- Отсутствие контроля потока: При использовании колбэков сложно управлять потоком выполнения, особенно при наличии множества асинхронных операций.
- Обработка ошибок: Обработка ошибок в колбэках может быть неудобной, особенно при наличии вложенности и нескольких асинхронных операций.

**Как выполнить несколько асинхронных операций последовательно?**

Для выполнения нескольких асинхронных операций последовательно в JavaScript можно использовать async/await. С помощью ключевого слова await можно приостановить выполнение функции до завершения асинхронной операции.

Пример:
```
async function performTasks() {
  await task1();
  await task2();
  await task3();
  // ...
}
```

Таким образом, каждая асинхронная операция будет выполняться после завершения предыдущей.

**Какие проблемы может вызвать неправильное использование асинхронности в JavaScript?**

Неправильное использование асинхронности в JavaScript может вызвать следующие проблемы:

- Ошибки асинхронных гонок (race conditions): Когда несколько асинхронных операций пытаются изменять общие данные одновременно, могут возникнуть непредсказуемые и некорректные результаты.
- Потеря контроля над потоком выполнения: Неправильное использование асинхронности может привести к тому, что выполнение кода становится неопределенным и трудно предсказуемым.
- Проблемы с обработкой ошибок: Некорректная обработка ошибок в асинхронном коде может привести к утечке ресурсов или некорректному поведению приложения.
- Сложность отладки и поддержки: Когда код содержит множество асинхронных операций и колбэков, отладка и поддержка становятся сложнее из-за сложности взаимодействия между ними.