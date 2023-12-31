<h3>
  <span>HTML:</span>
</h3>

**Что такое HTML и для чего он используется?**

HTML (HyperText Markup Language) - это язык разметки, используемый для создания и структурирования веб-страниц. Он определяет содержимое и структуру страницы, включая текст, изображения, ссылки и другие элементы.

**Какие глобальные атрибуты есть в HTML?**

Глобальные атрибуты могут применяться к любому HTML элементу. Некоторые из них:

- class: задает имя класса элемента для применения стилей CSS.
- id: уникально идентифицирует элемент.
- style: задает инлайновые стили для элемента.
- title: предоставляет всплывающую подсказку для элемента.
- data-*: позволяет добавить пользовательские атрибуты данных.

**Что такое категории контента в HTML5?**

Категории контента в HTML5 представляют собой различные типы содержимого, которые могут использоваться веб-страницами. Они включают:

- Метаданные (`<head>`): информация о документе, такая как заголовок, мета-теги, стили и скрипты.
- Секции (`<section>`): группировка связанных содержимых.
- Заголовки (`<h1>-<h6>`): заголовки разного уровня.
- Абзацы (`<p>`): текстовые абзацы.
- Ссылки (`<a>`): гиперссылки на другие страницы или ресурсы.
- Изображения (`<img>`): вставка изображений.
- Списки (`<ul>, <ol>, <li>`): упорядоченные и неупорядоченные списки.
- Формы (`<form>`): сбор данных от пользователя.
- Таблицы (`<table>, <tr>, <td>`): организация данных в табличной форме.

**Какие категории считаются основными категориями контента?**

Основными категориями контента в HTML5 являются:

- Метаданные (`<head>`)
- Секции (`<section>`)
- Заголовки (`<h1>-<h6>`)
- Абзацы (`<p>`)
- Ссылки (`<a>`)
- Изображения (`<img>`)
- Списки (`<ul>, <ol>, <li>`)
- Формы (`<form>`)

**Что такое doctype? И для чего он используется?**

Doctype (Document Type Declaration) - это объявление типа документа, которое указывает браузеру, как интерпретировать HTML код на странице. Doctype помещается в самое начало HTML документа и помогает браузеру определить версию HTML, с которой нужно работать. Он также гарантирует, что веб-страница будет отображаться в соответствии с выбранной версией HTML.

**Опишите базовую структуру HTML-страницы?**

Базовая структура HTML-страницы выглядит следующим образом:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Заголовок страницы</title>
</head>
<body>
  <!-- Содержимое страницы -->
</body>
</html>
```

**Что такое валидация? И какие типы проверок HTML документа вы знаете?**

Валидация HTML - это процесс проверки HTML кода на соответствие стандартам и правилам языка. Валидация помогает обнаружить и исправить ошибки в HTML коде, что может улучшить совместимость и доступность веб-страницы. Некоторые типы проверок HTML документа:

- Проверка синтаксиса: проверяет правильность синтаксиса HTML кода.
- Проверка структуры: убеждается, что структура HTML документа соблюдает правила и рекомендации.
- Проверка доступности: обнаруживает элементы, которые могут создавать проблемы для пользователей с ограниченными возможностями.
- Проверка совместимости: убеждается, что HTML код совместим с различными браузерами и устройствами.

**Основные этапы проверок валидности HTML-документа?**

Основные этапы проверок валидности HTML-документа:

1. Синтаксическая проверка: Проверка на наличие синтаксических ошибок в HTML коде.
2. Структурная проверка: Проверка корректности структуры HTML документа.
3. Проверка доступности: Проверка на соответствие стандартам доступности для пользователей с ограниченными возможностями.
4. Совместимость: Проверка совместимости HTML кода с различными браузерами и устройствами.

**Если представить HTML5 как открытую веб-платформу, из каких блоков он состоит?**

HTML5, рассматриваемый как открытая веб-платформа, состоит из следующих блоков:

- Семантика и структура: новые семантические теги и обновленная структура документа.
- Мультимедиа: поддержка аудио и видео без использования плагинов.
- Графика и 2D/3D: возможность рисования и создания графики с использованием элемента `<canvas>` и SVG.
- Улучшенные формы и ввод: новые типы полей ввода, проверка данных и улучшенные контролы форм.
- Коммуникация и хранилище: возможности работы с сервером и хранение данных на стороне клиента.
- Веб-компоненты: создание переиспользуемых пользовательских компонентов.
- Производительность и оптимизация: оптимизация скорости загрузки и выполнения скриптов.

**Какой тэг использовать для того, что бы сверстать кнопку?**

Для сверстывания кнопки в HTML вы можете использовать тег <button>, например:


```
<button>Нажми меня</button>
```
Можно также использовать тег `<input>` с атрибутом type="button":

```
<input type="button" value="Нажми меня">
```

**Что такое инлайновый стиль? Можно ли его переопределить?**

Инлайновый стиль в HTML - это способ задания стилей непосредственно внутри элемента с помощью атрибута style. 
Например:

```
<p style="color: blue; font-size: 16px;">Этот текст имеет инлайновый стиль</p>
```
Инлайновые стили имеют наивысший приоритет и могут переопределить внешние и внутренние стили, но они не являются рекомендуемым способом задания стилей в больших проектах. Лучше использовать внешние таблицы стилей (CSS) для обеспечения лучшей отдельности структуры и стиля.

**Есть ли у HTML элементов свои дефолтные специфичные стили?**

Да, у некоторых HTML элементов есть дефолтные специфичные стили, которые браузеры применяют автоматически, если вы не переопределяете их стили с помощью CSS. Например, у заголовков `<h1>-<h6>` может быть задан больший размер шрифта, у абзацев `<p>` - отступы, а у ссылок `<a>` - цвет и подчеркивание.


**Что такое семантика? Какие семантичные тэги вы знаете?**

Семантика в HTML относится к использованию тегов, которые имеют ясное значение и описывают содержимое веб-страницы. Семантичные теги помогают понять структуру документа и его содержимое как поисковым системам, так и разработчикам и пользователям. Некоторые семантичные теги в HTML5:

- `<header>`: область заголовка документа или раздела.
- `<nav>`: навигационное меню.
- `<main>`: основное содержимое документа.
- `<article>`: самостоятельный контент, который может быть независимо распространен или переиспользован.
- `<section>`: обобщенная секция контента.
- `<aside>`: боковая колонка или блок с дополнительной информацией.
- `<footer>`: область нижнего колонтитула документа или раздела.

**Как семантически правильно сверстать картинку с подписью?**

Для семантически правильной верстки картинки с подписью следует использовать элементы `<figure>` и `<figcaption>`. Элемент `<figure>` представляет собой контейнер для группировки связанных элементов, таких как изображения и подписи к ним. Элемент `<figcaption>` предназначен для создания подписи к содержимому `<figure>`, в данном случае к картинке.

Пример верстки картинки с подписью:

```
<figure>
  <img src="path/to/image.jpg" alt="Описание картинки">
  <figcaption>Подпись к картинке</figcaption>
</figure>
```

**Типы списков в HTML?**

Типы списков в HTML:
- Нумерованный список: `<ol>`
- Маркированный список: `<ul>`
- Список определений: `<dl>`

**Для какого тэга используется атрибут alt и зачем он нужен?**

Атрибут **alt** используется для указания альтернативного текста для изображений в тэге `<img>`. Он предоставляет описание изображения, которое будет отображено, если изображение не может быть загружено или если пользователь использует программу чтения с экрана. Также, этот текст будет виден, если включена функция отображения текста вместо изображений в браузере.

**Какая разница между тэгами `<strong><em>` и `<b><i>`?**

Разница между `<strong><em>` и `<b><i>`:

- `<strong>` и `<b>` используются для придания тексту важности или жирности визуально. Однако `<strong>` имеет большую семантическую значимость и обозначает, что текст является важным или существенным для контента.
- `<em>` и `<i>` используются для выделения текста курсивом. `<em>` имеет большую семантическую значимость и обозначает, что текст выделен эмоционально или фраза имеет особое значение.

**Типы <input> элементов в HTML?**

Некоторые типы элементов `<input>` в HTML:

- `<input type="text">` для ввода однострочного текста.
- `<input type="password">` для ввода пароля.
- `<input type="checkbox">` для флажков (checkbox).
- `<input type="radio">` для переключателей (radio button).
- `<input type="submit">` для кнопки отправки формы.
- `<input type="file">` для загрузки файлов.
- `<input type="date">` для выбора даты и т.д.

**Для чего используют data-атрибуты?**

Data-атрибуты (data-attributes) в HTML используются для добавления пользовательских данных к элементам без какого-либо влияния на их предназначение, функциональность или стилизацию. Они обычно используются для хранения информации, которая может быть использована с помощью JavaScript для обработки или взаимодействия с элементами.

**Разница между script, script async и script defer?**

Разница между `<script>`, `<script async>` и `<script defer>`:

- `<script>` блокирует парсинг HTML до загрузки и выполнения скрипта.
- `<script async>` загружает скрипт асинхронно с параллельной загрузкой HTML и выполняет его сразу после загрузки.
- `<script defer>` загружает скрипт асинхронно с параллельной загрузкой HTML, но откладывает выполнение скрипта до тех пор, пока весь HTML не будет полностью загружен.

**Для чего используется элемент <datalist>?**

Элемент `<datalist>` используется для предоставления списка вариантов (подсказок) для пользовательского ввода в элементе `<input>`. Он содержит набор опций, которые могут быть выбраны пользователем при вводе данных.

**Почему хорошей практикой считается располагать <link> для подключения CSS стилей внутри тэга head, а script для подключения JS ставить перед закрывающимся тэгом </body>?**

Расположение `<link>` для подключения CSS стилей внутри тега `<head>` рекомендуется для обеспечения более быстрой и более плавной загрузки страницы, так как CSS-стили должны быть применены до отображения содержимого страницы. Размещение `<script>` перед закрывающимся тегом `</body>` позволяет браузеру сначала загрузить и отобразить содержимое страницы, а затем загружать и выполнять JavaScript, что также может улучшить время загрузки страницы.

**Что такое мета-тэги?**

Мета-теги (`<meta>`) используются для предоставления информации о странице, такой как описание, ключевые слова, автор, кодировка символов и др. Они не отображаются на странице напрямую, но предоставляют метаданные для браузеров и поисковых систем.

**Что описывается в тэге <head>?**

Тег `<head>` используется для содержания информации о документе, такой как мета-теги, ссылки на стили, заголовок страницы (`<title>`), скрипты и другие элементы, которые не отображаются непосредственно на странице.

**Для чего используются тэги <tr>, <th>, <td>?**

Теги `<tr>`, `<th>`, `<td>` используются в таблицах:
- `<tr>` (table row) определяет строку таблицы.
- `<th>` (table header cell) определяет ячейку заголовка таблицы.
- `<td>` (table data cell) определяет ячейку данных таблицы.

**Расскажите о meta-теге с name="viewport"?**

Мета-тег `<meta name="viewport">` используется для управления отображением и масштабированием страницы на мобильных устройствах. Он определяет ширину видимой области страницы и начальный масштаб отображения.

**Что такое элемент <canvas>? И для чего он используется?**

Элемент `<canvas>` является графическим элементом в HTML5, который используется для рисования графики, анимации, игр и других визуальных эффектов с использованием JavaScript.

**Что такое svg и canvas?**

SVG (Scalable Vector Graphics) и Canvas - это два разных подхода к рисованию графики в HTML:

- SVG представляет векторную графику с использованием XML-синтаксиса. Он создает графику с помощью элементов и атрибутов, которые можно манипулировать с помощью CSS и JavaScript.
- Canvas представляет растровую графику и предоставляет API для рисования пикселей непосредственно на холсте. Графика на Canvas не является доступной по отдельным элементам и не может быть манипулирована с помощью CSS.

**Разница между <canvas> и <svg>?**

- `<canvas>` используется для рисования пиксельной графики и основывается на растровом подходе.
- `<svg>` используется для рисования векторной графики и основывается на XML-синтаксисе.

**В каких случаях лучше использовать <canvas>s, а в каких <svg>?**

В общем случае, `<canvas>` лучше использовать, когда требуется выполнение сложных динамических анимаций или рисование пиксельной графики с помощью JavaScript. `<svg>` лучше использовать, когда требуется масштабируемая векторная графика или манипуляции с элементами на основе DOM.

**Плюсы и минусы <canvas> и <svg>?**

Плюсы `<canvas>`:
- Более высокая производительность для сложных анимаций и графики.
- Мощное API для рисования пиксельной графики и обработки изображений.

Минусы `<canvas>`:
- Ограниченная доступность элементов графики и сложность обработки событий.
- Нет встроенной поддержки масштабируемой векторной графики.

Плюсы `<svg>`:
- Возможность масштабирования без потери качества.
- Доступность элементов графики и легкая обработка событий.

Минусы `<svg>`:
- Менее производительный для сложных анимаций и графики.
- Меньшая поддержка обработки изображений и пиксельной графики.

**Для чего нужен атрибут autocomplete?**

Атрибут autocomplete в `<input>` указывает браузеру, должно ли поле автоматически заполняться значениями, которые пользователь ранее вводил в это поле.

**Что такое элемент <output> в HTML5?**

Элемент `<output>` в HTML5 используется для отображения результатов вычислений или вывода информации из различных элементов формы.

**Что такое свойство valueAsNumber?**

Свойство valueAsNumber используется для получения числового значения из элемента `<input>`, который имеет тип ввода числа (`<input type="number">`). Оно возвращает числовое значение, введенное пользователем, или NaN, если введенное значение не является числом.

**Что такое атрибут target? Какие значения он принимает?**

Атрибут **target** используется для указания, где открывать ссылку или форму после их отправки. Значениями могут быть **_blank** (открыть в новом окне или вкладке), **_self** (открыть в текущем окне или фрейме) и другие значения для определения именованых окон или фреймов.

**Что такое ApplicationCache в HTML5?**

ApplicationCache в HTML5 предоставляет возможность создания веб-приложений, которые могут работать в автономном режиме, кэшируя файлы и ресурсы на стороне клиента. Он позволяет веб-страницам быть доступными даже при отсутствии подключения к Интернету.

**Для чего используется элемент <picture>?**

Элемент `<picture>` используется для отображения разных версий изображения в зависимости от разных условий, таких как размер экрана или плотность пикселей. Он может содержать несколько дочерних элементов `<source>`, каждый из которых определяет альтернативную версию изображения для разных условий, и элемент `<img>` как запасной вариант.

**Что такое srcset? Как работает srcset?**

**srcset** - это атрибут элемента `<img>`, который определяет список альтернативных изображений с разными разрешениями. Браузер выбирает наиболее подходящее изображение из списка, основываясь на доступных ресурсах и размерах отображаемой области.

**Как семантически верно сверстать навигационное меню?**

Для семантически верного сверстывания навигационного меню рекомендуется использовать элемент `<nav>`. Внутри `<nav>` можно использовать список `<ul>` или другие семантические элементы, такие как `<ol>` или `<menu>`, с соответствующими классами для стилизации.

**Что такое `<iframe>`?**

`<iframe>` - это элемент, используемый для вставки внешнего содержимого, такого как веб-страницы или документы, внутри текущей страницы. Он создает прямоугольную область, в которой отображается внешнее содержимое.

**Для чего используются тэги `<sub>` и `<sup>`?**

Тэги `<sub>` и `<sup>` используются для отображения подстрочного и надстрочного текста соответственно. Они часто используются для обозначения нижних и верхних индексов, химических формул, математических выражений и т.д.

**Как можно скрыть элемент разметки не используя CSS и JS?**

Чтобы скрыть элемент разметки без использования CSS и JavaScript, можно использовать атрибут hidden. 
Например, `<div hidden>Скрытый контент</div>`.

**Разница между `meter` и `progress`?**

`<meter>` и `<progress>` - это два элемента в HTML для отображения прогресса или уровня завершенности. `<meter>` используется для измерения значения в пределах заданного диапазона, например, уровня заряда батареи, оценки и др. `<progress>` используется для отображения прогресса выполнения задачи, например, загрузки файла или выполнения процесса.

**Как можно сгруппировать опции внутри тэга `<select>`?**

Опции внутри элемента `<select>` могут быть группированы с помощью элемента `<optgroup>`. `<optgroup>` определяет группу связанных вариантов выбора.

**Как можно изменить форму картинки или HTML элемента?**

Изменить форму картинки или HTML элемента можно с помощью CSS-свойства **border-radius**, которое позволяет задать скругленные углы для элемента.

**Чем отличается `<article>` от `<section>`?**

`<article>` и `<section>` являются семантическими элементами HTML5 для организации содержимого на странице:

- `<article>` используется для самостоятельного контента, такого как новость, статья или блоговый пост.
- `<section>` используется для группировки связанного контента внутри страницы.

**Расскажите об особенностях стилизации `<svg>`?**

При стилизации `<svg>` используются CSS-правила, такие как заполнение (fill), обводка (stroke), размеры и трансформации. Можно применять CSS-классы или встроенные стили, а также манипулировать элементами `<svg>` с помощью JavaScript.

**Разница между кнопкой и ссылкой в HTML?**

Разница между кнопкой (`<button>`) и ссылкой (`<a>`) в HTML:

Кнопка (`<button>`) используется для выполнения действия или отправки формы.
Ссылка (`<a>`) используется для перехода по ссылке на другую страницу или раздел страницы.

**Для чего используется атрибут decoding?**

Атрибут **decoding** используется для указания способа декодирования изображения, указанного в атрибуте **src** элемента `<img>`. Значениями могут быть **sync** (декодирование синхронное с загрузкой) и **async** (декодирование асинхронное с загрузкой).

**Для чего используется атрибут enterkeyhint?**

Атрибут **enterkeyhint** используется для указания браузеру, какое действие следует выполнить при нажатии клавиши Enter в элементе формы. Например, значение **search** указывает, что следует выполнить поиск.

**Для чего используют атрибут novalidate?**

Атрибут **novalidate** используется в элементе `<form>` для отключения встроенной валидации браузера. Это позволяет отправлять форму без выполнения проверки валидности полей.

**Для чего используют атрибут inputmode?**

Атрибут **inputmode** указывает браузеру тип ввода, ожидаемый в элементе `<input>`. Например, значение **numeric** указывает, что ожидается числовой ввод.

**Для чего используется атрибут pattern?**

Атрибут **pattern** используется для указания регулярного выражения, с которым должно совпадать введенное значение в элементе `<input>`. Это позволяет задавать определенные форматы для ввода данных.

**Почему стоит использовать семантические теги в верстке?**

Использование семантических тегов в верстке имеет несколько преимуществ:
- Улучшает доступность для пользователей с ограниченными возможностями.
- Повышает понятность и семантику кода для разработчиков и поисковых систем.
- Упрощает поддержку и обслуживание кода.

**Для чего используется тэг `<label>`?**

Тэг `<label>` используется для создания связи между меткой и элементом формы. Он позволяет пользователям щелкнуть по тексту метки, чтобы активировать или фокусироваться на связанном элементе формы. Это улучшает доступность и удобство использования форм на веб-страницах.