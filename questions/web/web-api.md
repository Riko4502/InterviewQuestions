<h3>
  <span>Web API:</span>
</h3>

**Что такое HTTP?**

HTTP (HyperText Transfer Protocol) - это протокол передачи данных в сети, который используется для обмена информацией между клиентом и сервером. Он обеспечивает стандартные правила и соглашения о том, как клиент отправляет запросы к серверу и как сервер отвечает на эти запросы. HTTP использует текстовый формат для отправки запросов и получения ответов, что делает его легким для чтения и понимания. Этот протокол является основой для веб-сайтов и приложений, поскольку позволяет получать различные типы контента, например, HTML-страницы, изображения, видео и другие данные.

**Из чего состоит HTTP-запрос?**

HTTP-запрос состоит из нескольких элементов. Во-первых, у него есть метод, который определяет тип операции, выполняемой над ресурсом, такой как получение (GET), отправка данных (POST), обновление (PUT) или удаление (DELETE). Затем указывается путь к ресурсу, который может быть URL-адресом или относительным путем на сервере. Заголовки запроса содержат дополнительную информацию, такую как тип контента, язык, кэширование и т. д. Некоторые запросы могут также содержать тело, где передаются данные, например, при отправке формы или загрузке файла на сервер.

**Какие методы может иметь HTTP-запрос?**

HTTP-запрос может иметь различные методы, которые определяют тип операции, выполняемой над ресурсом на сервере. Некоторые из наиболее распространенных методов включают:

GET: используется для получения ресурса с сервера. Этот метод не должен иметь побочных эффектов на сервере и обычно используется для получения данных.
POST: используется для отправки данных на сервер, например, при отправке формы. Этот метод может иметь побочные эффекты, такие как создание нового ресурса на сервере.
PUT: используется для обновления ресурса на сервере. Он полностью заменяет существующий ресурс новыми данными.
DELETE: используется для удаления ресурса на сервере.
PATCH: используется для частичного обновления ресурса на сервере, когда требуется изменить только некоторые его атрибуты.
Каждый метод имеет свою уникальную функцию и используется в соответствии с требованиями приложения и операциями, выполняемыми над ресурсами.

**Что такое HTTP cookie? Для чего они используются?**

HTTP-куки (или просто куки) - это небольшие текстовые файлы, которые хранятся на компьютере пользователя веб-браузером. Они используются для сохранения информации о состоянии сеанса и взаимодействия с веб-сайтами. Куки могут содержать данные, такие как идентификаторы сеансов, настройки пользователя, предпочтения и другую информацию. Они позволяют веб-сайтам "запоминать" пользователя и предоставлять персонализированный опыт, а также использоваться для отслеживания и аналитики.

**Разница между HTTP и HTTPS?**

ница между HTTP (HyperText Transfer Protocol) и HTTPS (HyperText Transfer Protocol Secure) заключается в обеспечении безопасности и шифрования передаваемых данных. HTTP является стандартным протоколом для передачи данных между веб-сервером и клиентом, но он не обеспечивает защиту данных от прослушивания или изменения. В отличие от этого, HTTPS использует шифрование SSL/TLS для защиты данных, что делает их непригодными для прослушивания или модификации злоумышленниками. HTTPS обычно используется на веб-сайтах, где требуется передача конфиденциальных данных, таких как пароли, платежные данные и личная информация пользователей.

**Разница между HTTP/1 и HTTP/2?**

Разница между HTTP/1 и HTTP/2 заключается в улучшении производительности и эффективности передачи данных. HTTP/1 использует последовательный запрос-ответный модель, что означает, что каждый запрос отправляется по отдельности, что может вызывать задержки. HTTP/2 вводит мультиплексирование, позволяющее отправлять несколько запросов и получать несколько ответов одновременно на одном соединении. Кроме того, HTTP/2 включает сжатие заголовков, бинарный формат передачи данных и поддержку серверного push, что уменьшает задержки и улучшает производительность веб-приложений. В целом, HTTP/2 представляет собой более современный и эффективный протокол передачи данных по сравнению с HTTP/1.

**Как работает мультиплексирование в HTTP/2?**

Мультиплексирование в HTTP/2 - это техника, которая позволяет отправлять несколько запросов и получать несколько ответов одновременно на одном соединении. Вместо того, чтобы отправлять запросы последовательно, они разбиваются на маленькие фрагменты, называемые кадрами, которые могут передаваться независимо друг от друга. Каждый фрагмент имеет свой идентификатор, поэтому сервер может восстановить исходные запросы и ответы. Мультиплексирование позволяет эффективно использовать одно соединение, уменьшая задержки и улучшая производительность веб-приложений.

**Что такое “трехстороннее рукопожатие” (Triple handshake)?**


"Трехстороннее рукопожатие" (Triple handshake) - это процесс установки TCP-соединения между клиентом и сервером. Оно состоит из трех шагов: клиент отправляет пакет SYN (synchronize) для инициирования соединения, сервер отвечает пакетом SYN-ACK (synchronize-acknowledge) для подтверждения и готовности установить соединение, а затем клиент отправляет пакет ACK (acknowledge) в ответ, завершая процесс установки соединения. "Трехстороннее рукопожатие" необходимо для согласования параметров соединения и установки начального сеансового ключа, необходимых для обеспечения надежного обмена данными между клиентом и сервером.

**Разница между PUT- и POST-запросами?**

Разница между PUT- и POST-запросами заключается в их назначении и семантике. PUT-запрос используется для создания или обновления ресурса на сервере по указанному URL-адресу. Он заменяет существующий ресурс или создает новый, если его не было. POST-запрос, в свою очередь, используется для отправки данных на сервер для обработки или добавления нового ресурса. Он не заменяет существующий ресурс, а скорее предоставляет данные для обработки или сохранения на сервере. PUT-запросы и POST-запросы имеют различное назначение и применяются в зависимости от требований и целей взаимодействия с сервером.

**Разница между протоколами TCP и UDP?**

Разница между протоколами TCP (Transmission Control Protocol) и UDP (User Datagram Protocol) заключается в их функциях и особенностях передачи данных. TCP обеспечивает надежную и упорядоченную передачу данных, гарантируя доставку пакетов в нужном порядке и обнаруживая и восстанавливая потерянные или поврежденные пакеты. Он также контролирует поток данных и обеспечивает контроль нагрузки. UDP, в свою очередь, является простым протоколом передачи данных без проверки доставки или установления соединения. Он быстрее и более эффективен, но не обеспечивает надежности, упорядоченности или контроля нагрузки, что делает его более подходящим для приложений, где более важна скорость и мгновенность передачи данных, например, в стриминге видео или VoIP-соединениях.

**Что такое WebSocket? В чем принцип его работы?**

WebSocket - это протокол коммуникации, который позволяет устанавливать постоянное двустороннее соединение между клиентом и сервером через одно TCP-соединение. Он отличается от обычного HTTP-протокола тем, что не требует постоянного установления новых соединений для обмена данными. WebSocket использует заголовки и специальное согласование между клиентом и сервером для установки и поддержания соединения, и после этого данные могут передаваться в режиме реального времени в обоих направлениях. Это делает WebSocket идеальным для создания интерактивных веб-приложений, чатов, стриминга данных и других приложений, где требуется непрерывная и мгновенная передача данных.

**Разница между Long-Polling, Websockets и Server-Sent Events?**


Long-Polling, Websockets и Server-Sent Events (SSE) являются различными техниками для реализации взаимодействия в реальном времени между клиентом и сервером.

Long-Polling - это метод, при котором клиент отправляет запрос на сервер и ожидает ответа до тех пор, пока не произойдет событие или не истечет определенное время ожидания. При появлении новых данных на сервере, клиент получает ответ и сразу отправляет новый запрос для следующего ожидания.

Websockets - это протокол, который позволяет установить постоянное двустороннее соединение между клиентом и сервером. С помощью Websockets клиент и сервер могут обмениваться данными в режиме реального времени, без необходимости повторной отправки запросов.

Server-Sent Events (SSE) - это механизм, который позволяет серверу отправлять асинхронные обновления клиенту через однонаправленное соединение. Сервер может отправлять данные клиенту по мере их появления, что позволяет обновлять информацию на клиентской стороне без необходимости повторных запросов.

Таким образом, Long-Polling использует периодические запросы для получения обновлений, Websockets обеспечивает постоянное двустороннее соединение, а Server-Sent Events позволяет серверу отправлять асинхронные обновления клиенту. Выбор между ними зависит от требований и особенностей конкретного приложения.

**Как работает JSONP?**

JSONP (JSON with Padding) - это техника, которая позволяет обойти ограничения политики безопасности браузера при выполнении запросов между разными доменами. Она использует тег <script>, чтобы получить данные с другого домена, добавляя коллбэк-функцию в URL запроса. Сервер на стороне другого домена обрабатывает запрос, оборачивает данные в вызов функции и возвращает их в ответе. Браузер интерпретирует полученные данные как исполняемый JavaScript-код и вызывает соответствующую коллбэк-функцию, передавая ей данные в качестве параметра. Это позволяет получать данные с других доменов, не нарушая политику Same-Origin.

**Что такое IndexedDB в браузере? Преимущества IndexedDB?**

IndexedDB - это API веб-браузера, предоставляющее возможность веб-приложениям хранить и манипулировать большими объемами структурированных данных на клиентской стороне. Он представляет собой нереляционную базу данных, которая позволяет создавать объектные хранилища и выполнять операции добавления, чтения, обновления и удаления данных. Преимущества IndexedDB включают мощные возможности запросов и индексации данных, поддержку транзакций для обеспечения целостности данных, а также возможность работы в автономном режиме без подключения к Интернету. Это делает IndexedDB полезным инструментом для создания онлайн и офлайн веб-приложений, а также для кэширования данных и улучшения производительности.

**Что такое Service Workers?**

Service Workers - это скрипты, которые работают в фоновом режиме веб-браузера, независимо от открытых страниц. Они предоставляют мощные возможности для обработки сетевых запросов, кэширования ресурсов и управления жизненным циклом веб-приложений. С помощью Service Workers можно создавать оффлайн-приложения, улучшать производительность загрузки страниц и обеспечивать надежность работы даже при недоступности сети. Они являются ключевой технологией для создания прогрессивных веб-приложений и обеспечивают более богатый и непрерывный пользовательский опыт.

**Что такое Web Workers?**

Web Workers - это скрипты, которые выполняются в отдельном потоке веб-браузера, параллельно с основным потоком исполнения JavaScript. Они предоставляют возможность выполнять вычислительно интенсивные задачи или обрабатывать долгие операции без блокировки пользовательского интерфейса. Web Workers могут использоваться для распараллеливания работы, ускорения обработки данных и улучшения отзывчивости веб-приложений. Они позволяют создавать многопоточные приложения в веб-среде и повышают производительность и плавность работы веб-приложений.

**Что такое Web Worklet?**

Web Worklet - это API веб-браузера, которое позволяет разработчикам создавать и использовать свои собственные пользовательские потоки выполнения (worklet) для выполнения вычислительных задач на клиентской стороне. Это расширение концепции Web Workers, но с более легковесным и гибким подходом. Web Worklet может быть использован для выполнения специализированных задач, таких как аудиообработка, рендеринг, анимация и другие, и предоставляет возможность расширения функциональности веб-приложений. Он обеспечивает более эффективное использование ресурсов и повышает производительность веб-приложений.

**Что такое SSL/TLS? Зачем они используются в веб-разработке?**

SSL (Secure Sockets Layer) и его преемник TLS (Transport Layer Security) - это протоколы шифрования, используемые в веб-разработке для обеспечения безопасной передачи данных между клиентом и сервером. Они используют криптографические методы для защиты информации от перехвата и подмены во время передачи по сети. SSL/TLS обеспечивает аутентификацию сервера, конфиденциальность данных и целостность сообщений. Они играют важную роль в защите конфиденциальности и безопасности пользователей веб-приложений, таких как онлайн-магазины, интернет-банкинг и другие, гарантируя, что передаваемая информация остается приватной и неподверженной вмешательству злоумышленников.

**Механизм установки сеанса между клиентом и сервером?**

Механизм устанавки сеанса между клиентом и сервером осуществляется с использованием протокола Handshake. В начале процесса клиент отправляет запрос на установку сеанса серверу. Сервер отвечает, предоставляя свой сертификат и открытый ключ. Клиент проверяет сертификат, генерирует секретный ключ и шифрует его с помощью открытого ключа сервера. Затем клиент отправляет зашифрованный ключ серверу, который расшифровывает его, устанавливает защищенное соединение и сеанс между клиентом и сервером начинается. Этот процесс гарантирует безопасность передаваемой информации и аутентификацию сервера.

**Что Такое API?**

API (Application Programming Interface) - это набор определенных правил и протоколов, которые позволяют различным программным компонентам взаимодействовать между собой. Он определяет способы, как одна программная система может обращаться к функциональности и данным, предоставляемым другой системой. API определяет структуру запросов и ответов, формат передаваемых данных и доступные операции. Он играет важную роль в разработке приложений, позволяя разным компонентам взаимодействовать и обмениваться информацией, расширяя функциональность и интегрируя различные системы.

**Что такое CDN?**

CDN (Content Delivery Network) - это распределенная сеть серверов, размещенных в различных географических точках, которая служит для эффективной доставки контента до конечных пользователей. Когда пользователь запрашивает контент, CDN автоматически выбирает ближайший к нему сервер, чтобы минимизировать задержку и улучшить скорость загрузки. CDN кэширует контент на своих серверах и предлагает его из самого ближайшего узла, что помогает снизить нагрузку на исходный сервер и обеспечить более быструю доставку контента. CDN также повышает надежность и защищает от DDoS-атак, распределяя трафик по разным серверам сети.

**Что такое IP-адрес?**

Уникальный идентификатор.

**Разница между host и domain?**

Host и domain - это два термина, связанных с адресацией в сети. Host относится к конкретному компьютеру или устройству, подключенному к сети. Он может быть именем хоста или IP-адресом. Domain - это более высокий уровень в иерархии адресации. Он представляет собой читаемое имя, используемое для идентификации группы связанных хостов. Domain-имя состоит из нескольких компонентов, разделенных точками, и указывает на принадлежность хоста к определенной сети или организации. Например, в адресе "www.example.com" "www" является именем хоста, а "example.com" - доменным именем.

**Разница между URI и URL?**

URI (Uniform Resource Identifier) и URL (Uniform Resource Locator) - это оба термина, связанных с идентификацией ресурсов в сети. URI - это общий термин, который охватывает и URL, и URN (Uniform Resource Name). URL - это конкретный тип URI, который указывает на местоположение ресурса в сети. Он содержит протокол, доменное имя (или IP-адрес) и путь к ресурсу. Например, "https://www.example.com/page" является URL. URN, в отличие от URL, идентифицирует ресурс по его имени, независимо от его местоположения.

**Почему очищать кэш важно? Как это можно сделать?**

Очистка кэша важна, потому что кэшированные данные могут стареть или становиться недействительными. Когда вы посещаете веб-сайт, браузер сохраняет некоторые данные на вашем компьютере, чтобы в следующий раз загружать страницу быстрее. Однако, если веб-сайт обновляется, то старые данные в кэше могут быть неправильными или устаревшими, что может привести к проблемам при отображении или работе сайта. Очистка кэша можно выполнить в настройках браузера, где вы можете выбрать удаление кэшированных файлов и данных. Это позволяет браузеру загрузить свежие данные с веб-сервера при следующем посещении веб-сайта.

**Разница между идентификацией, аутентификацией, авторизацией?**

Идентификация, аутентификация и авторизация - это три различных концепции, связанные с управлением доступом пользователей к системам и ресурсам.

Идентификация - это процесс определения, кто является пользователем, и назначения уникального идентификатора, такого как имя пользователя или электронная почта. Например, пользователь вводит свое имя пользователя на веб-сайте, чтобы идентифицировать себя.

Аутентификация - это процесс проверки подлинности пользователя. Это подтверждение того, что пользователь является тем, за кого он себя выдаёт. Это может включать ввод пароля, использование биометрических данных или других способов подтверждения личности пользователя.

Авторизация - это процесс предоставления разрешений пользователю после успешной аутентификации. Это определяет, насколько пользователь имеет доступ к определенным ресурсам или функциональности системы. Например, авторизованный пользователь может иметь право просматривать и редактировать определенные страницы на веб-сайте.

Таким образом, идентификация устанавливает личность пользователя, аутентификация проверяет эту личность, а авторизация определяет права доступа пользователя к системе или ресурсам.

**Виды аутентификации?**

Существуют различные виды аутентификации, которые используются для проверки подлинности пользователей:

Парольная аутентификация: пользователь вводит комбинацию логина и пароля для подтверждения своей личности. Это наиболее распространенный вид аутентификации, но он может быть уязвим к атакам подбора пароля.

Биометрическая аутентификация: использует уникальные физические или поведенческие характеристики пользователя, такие как отпечаток пальца, сетчатка глаза или голос, для проверки подлинности. Это более безопасный способ, так как биометрические данные сложнее подделать.

Многофакторная аутентификация: комбинирует два или более способа аутентификации, например, пароль с одноразовым кодом, отправленным на мобильное устройство пользователя. Это повышает безопасность, так как злоумышленникам потребуется обойти несколько проверок.

Каждый вид аутентификации имеет свои преимущества и недостатки, и выбор зависит от уровня безопасности, удобства использования и требований конкретной системы или приложения.

**Что такое безопасные (Secure) и HttpOnly cookies?**

Безопасные (Secure) и HttpOnly cookies - это два дополнительных атрибута, которые могут быть установлены для cookies и повышают уровень безопасности веб-приложений.

Безопасные (Secure) cookies используются для передачи информации только через защищенное HTTPS соединение. Это означает, что эти cookies будут отправляться только при использовании HTTPS протокола, что защищает их от перехвата злоумышленниками в открытой сети.

HttpOnly cookies ограничивают доступ к cookies только на уровне сервера, и они не могут быть изменены или прочитаны на стороне клиента с использованием JavaScript. Это предотвращает атаки, связанные с кражей сессий через скрипты на стороне клиента.

Использование обоих типов cookies - безопасных и HttpOnly - помогает улучшить безопасность веб-приложений, защищая конфиденциальные данные пользователей и предотвращая некоторые виды атак, связанных с кражей сессий или подделкой запросов.

**Что такое Content Security Policy (CSP)?**

Content Security Policy (CSP) - это механизм безопасности, который позволяет веб-разработчикам контролировать и ограничивать загрузку ресурсов на веб-странице. CSP устанавливает правила, которые определяют, какие источники контента могут быть загружены, какие типы действий разрешены и какие ограничения применяются к скриптам и другим ресурсам.

С помощью CSP можно защититься от атак, таких как внедрение скриптов, межсайтовое подлог и других видов атак на основе выполнения кода на веб-странице. Он также позволяет управлять политиками загрузки ресурсов, блокировать небезопасные операции и предотвращать возможность загрузки контента с ненадежных или непроверенных источников.

CSP настраивается на серверной стороне и представляет собой заголовок HTTP, который отправляется вместе с веб-страницей. Он может быть использован в сочетании с другими мерами безопасности, чтобы создать надежную защиту для веб-приложений и улучшить безопасность пользователей.

**Что такое CORS?**

CORS (Cross-Origin Resource Sharing) - это механизм, который контролирует доступ к ресурсам на веб-странице из другого источника (домена, протокола или порта). Он предотвращает выполнение запросов на другие домены без явного разрешения. Благодаря CORS, веб-разработчики могут указать, какие ресурсы могут быть доступны с других доменов, и какие запросы разрешены.

CORS работает на основе обмена определенными заголовками между клиентом и сервером. Когда браузер отправляет запрос на другой домен, сервер должен явно разрешить доступ к своим ресурсам, отправив ответ с определенными заголовками. Браузер затем проверяет эти заголовки и решает, разрешено ли выполнение запроса и доступ к ресурсам.

CORS важен для обеспечения безопасности и защиты веб-приложений от возможных атак на основе выполнения кода с других доменов. Он позволяет контролировать, какие домены имеют доступ к ресурсам, и предотвращает несанкционированный доступ к чувствительным данным на веб-странице.

**Что такое межсайтовый скриптинг (XSS)?**

Межсайтовый скриптинг (XSS) - это уязвимость веб-приложений, при которой злоумышленник внедряет и выполняет вредоносный скрипт на веб-странице, открытой для других пользователей. XSS позволяет злоумышленнику получать доступ к конфиденциальной информации пользователей, манипулировать содержимым страницы или перехватывать данные, передаваемые между пользователем и сервером.

Атаки XSS могут быть хранимыми или рефлектируемыми. Хранимый XSS возникает, когда вредоносный скрипт сохраняется на сервере и отображается другим пользователям. Рефлектируемый XSS происходит, когда вредоносный скрипт передается через параметры URL или формы, и браузер выполняет его на стороне клиента.

Для предотвращения атак XSS важно применять надлежащие меры безопасности, такие как фильтрация и кодирование данных, а также использование Content Security Policy (CSP) для ограничения выполнения скриптов на странице. Разработчики также должны следить за обновлениями и патчами для своих веб-приложений, чтобы устранить известные уязвимости, которые могут быть использованы для атак XSS.

**Методы повышения безопасности веб-приложений?**


Для повышения безопасности веб-приложений можно применять несколько методов. Во-первых, важно регулярно обновлять и патчить программное обеспечение, включая операционную систему, веб-сервер и используемые библиотеки, чтобы исправить известные уязвимости. Во-вторых, необходимо реализовать корректную аутентификацию и авторизацию, чтобы убедиться, что только правильные пользователи имеют доступ к конфиденциальным данным и функциональности. Также важно применять фильтрацию и валидацию данных, чтобы предотвратить атаки, такие как инъекции SQL или XSS. Кроме того, веб-приложения должны использовать защищенное соединение (HTTPS) для шифрования передаваемой информации между клиентом и сервером, чтобы предотвратить перехват и изменение данных злоумышленниками.

**Что такое OWASP Top 10?**

OWASP Top 10 - это список наиболее распространенных уязвимостей веб-приложений, разработанный Open Web Application Security Project (OWASP). Он представляет собой перечень основных угроз и рисков, с которыми сталкиваются веб-приложения, и служит важным руководством для разработчиков и тестировщиков на предмет безопасности. В список включены уязвимости, такие как инъекции, аутентификационные проблемы, кросс-сайтовый скриптинг и другие. OWASP Top 10 позволяет приоритизировать усилия по обеспечению безопасности и помогает разработчикам принять меры для предотвращения таких уязвимостей в своих приложениях.