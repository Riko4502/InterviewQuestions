<h3>
  <span>OOP & FP:</span>
</h3>

**Основные принципы ООП?**

1. Инкапсуляция: Скрытие внутренней реализации объекта и предоставление интерфейса для взаимодействия с ним.
2. Наследование: Механизм, позволяющий классам наследовать свойства и методы от других классов.
3. Полиморфизм: Возможность объектов разных классов иметь одинаковые имена методов, но с различной реализацией.
4. Абстракция: Отделение сущностей от их конкретных реализаций и представление их в виде абстрактных классов или интерфейсов.

**Что такое SOLID?**

SOLID - это акроним, обозначающий пять основных принципов объектно-ориентированного программирования, разработанных Робертом Мартином:

1. Принцип единственной ответственности (Single Responsibility Principle): Каждый класс должен иметь только одну причину для изменения.
2. Принцип открытости/закрытости (Open/Closed Principle): Программные сущности должны быть открыты для расширения, но закрыты для модификации.
3. Принцип подстановки Лисков (Liskov Substitution Principle): Объекты должны быть заменяемыми своими подтипами без изменения корректности программы.
4. Принцип разделения интерфейса (Interface Segregation Principle): Клиенты не должны зависеть от интерфейсов, которые они не используют.
5. Принцип инверсии зависимостей (Dependency Inversion Principle): Зависимости должны строиться на абстракциях, а не на конкретных реализациях.

**Разница между классовым и прототипным наследованием?**

- Классовое наследование (Classical Inheritance): Основано на использовании классов для создания объектов и наследования свойств и методов от других классов. Применяется в языках, таких как Java, C++, C#.
- Прототипное наследование (Prototypal Inheritance): Основано на использовании прототипов объектов для создания новых объектов и наследования свойств и методов от прототипов. Применяется в JavaScript.

**Однонаправленный поток данных и двусторонняя связь данных? В чем между ними разница?**

В однонаправленном потоке данных данные перемещаются только в одном направлении от источника к приемнику. Изменения в источнике данных автоматически отражаются в приемнике данных. Это обеспечивает строгую связь между источником и приемником данных.

В двусторонней связи данных данные могут перемещаться в обоих направлениях между источником и приемником данных. Изменения в источнике могут автоматически обновлять приемник, и изменения в приемнике могут автоматически обновлять источник. Это позволяет более гибко управлять данными, но также может привести к сложностям в поддержке и отладке.

**Что такое функциональное программирование?**

Функциональное программирование (Functional Programming) - это парадигма программирования, в которой программа строится из функций и операций над ними. Основные принципы функционального программирования включают неизменяемость данных, отсутствие побочных эффектов, использование функций высшего порядка и рекурсии.

**Что такое MVC?**

MVC (Model-View-Controller) - это архитектурный паттерн, который разделяет приложение на три компонента:

- Модель (Model): Представляет данные и бизнес-логику приложения.
- Представление (View): Отображает данные пользователю и обрабатывает пользовательский ввод.
- Контроллер (Controller): Обрабатывает пользовательский ввод, взаимодействует с моделью и обновляет представление.

**Что такое MVVM?**

MVVM (Model-View-ViewModel) - это архитектурный паттерн, основанный на MVC, который добавляет модель представления (ViewModel) между представлением и моделью. ViewModel предоставляет данные и операции, необходимые для отображения и обработки пользовательского ввода в представлении.

**Что такое MVP?**

MVP (Model-View-Presenter) - это архитектурный паттерн, похожий на MVC, но с более тесной связью между представлением и презентером. Презентер выполняет роль посредника между представлением и моделью, обрабатывая пользовательский ввод и обновляя представление и модель.

**Недостатки паттерна MVW?**

Недостатки паттерна MVW (Model-View-Whatever), включающего MVC, MVVM и MVP, могут включать:

Усложнение структуры кода из-за дополнительных компонентов и связей между ними.
Возможность возникновения избыточного кода, особенно в модельных и представительских компонентах.
Трудность понимания и поддержки кода из-за сложных взаимодействий между компонентами.
Возможность возникновения проблем с производительностью при большом количестве данных и обновлений интерфейса.

**Разница между функцией и методом?**

Разница между функцией и методом:

Функция (Function): Это блок кода, который выполняет определенную операцию и может принимать аргументы и возвращать значение. Функция может быть вызвана из разных частей программы независимо от объектов.
Метод (Method): Это функция, которая связана с объектом или классом и выполняет операции, связанные с этим объектом или классом. Метод вызывается на объекте или классе с использованием синтаксиса точки или двоеточия.

**Что такое каррирование (Currying)?**

Каррирование (Currying) - это техника функционального программирования, которая заключается в преобразовании функции с несколькими аргументами в последовательность функций с одним аргументом. Каждая последующая функция принимает один аргумент и возвращает новую функцию, которая ожидает следующий аргумент. Это позволяет частичное применение аргументов и создание более специализированных функций.

**Плюсы и минусы ФП и ООП?**

Плюсы функционального программирования:

- Неизменяемость данных и отсутствие побочных эффектов, что упрощает отладку и понимание программы.
- Функции высшего порядка и возможность передачи функций в качестве аргументов или возвращения функций из других функций.
- Упрощенная параллелизация и асинхронное программирование благодаря отсутствию состояния и побочных эффектов.
- Большая модульность и возможность повторного использования кода благодаря функциям как независимым строительным блокам.

Минусы функционального программирования:

- Сложность в понимании и использовании функциональных концепций для разработчиков, привыкших к императивному стилю.
- Ограничения в работе с изменяемыми данными, так как функциональное программирование ставит акцент на неизменяемость.
- Возможные проблемы с производительностью из-за создания большого количества промежуточных объектов и вызова функций.

**Разница между монолитной и микросервисной архитектурами?**

Монолитная архитектура - это подход к разработке программного приложения, при котором все компоненты и функциональности приложения находятся в одной большой и связанной между собой системе. Все компоненты развертываются и масштабируются вместе.

Микросервисная архитектура - это подход к разработке программного приложения, при котором приложение разбивается на небольшие, слабо связанные между собой сервисы. Каждый сервис представляет собой независимую и самодостаточную часть приложения, которая может быть развернута и масштабирована отдельно от других сервисов.

**Плюсы и минусы монолитной и микросервисной архитектур?**

Плюсы монолитной архитектуры:

- Проще в разработке и тестировании, так как все компоненты находятся в одной системе.
- Более простое внедрение и развертывание, так как все компоненты развертываются вместе.
- Меньше сложностей с сетевым взаимодействием между компонентами.

Минусы монолитной архитектуры:

- Ограниченная масштабируемость, так как все компоненты развертываются и масштабируются вместе.
- Сложность поддержки и модификации, так как изменения в одном компоненте могут затронуть другие компоненты.


Плюсы микросервисной архитектуры:

- Лучшая масштабируемость, так как каждый сервис может быть масштабирован отдельно от других.
- Более гибкое развертывание, так как каждый сервис может быть развернут независимо.

Минусы микросервисной архитектуры:

- Большая сложность в разработке и управлении большим количеством сервисов.
- Сложность с сетевым взаимодействием и обеспечением целостности данных между сервисами.

**Какие принципы можно использовать вместе с наследованием?**

Принципы, которые можно использовать вместе с наследованием, включают:

- Принцип единственной ответственности (Single Responsibility Principle): Каждый класс должен иметь только одну причину для изменения, что помогает разделить функциональность между классами.
- Принцип открытости/закрытости (Open/Closed Principle): Классы должны быть открыты для расширения и закрыты для модификации, что позволяет добавлять новую функциональность через наследование без изменения существующего кода.
- Принцип подстановки Лисков (Liskov Substitution Principle): Объекты должны быть заменяемыми своими подтипами без изменения корректности программы, что позволяет использовать наследуемые классы вместо базовых классов.
- Принцип инверсии зависимостей (Dependency Inversion Principle): Зависимости должны строиться на абстракциях, а не на конкретных реализациях, что позволяет изолировать классы от зависимостей и обеспечить гибкость при замене реализации.

Расширение метода в объектно-ориентированном программировании означает добавление нового функционала в существующий метод в производном классе. Расширение метода позволяет сохранить базовую функциональность метода и добавить дополнительные действия.

Переопределение метода в объектно-ориентированном программировании означает изменение реализации метода в производном классе. Переопределение метода позволяет полностью заменить базовую реализацию метода на новую в производном классе.

Определение метода в классе означает создание метода внутри класса с определенным именем, параметрами и реализацией. Методы предоставляют возможность выполнения операций и взаимодействия с объектами класса.

**Какие ещё принципы кроме SOLID вы знаете?**

Помимо принципов SOLID, существуют и другие принципы, которые помогают в разработке качественного программного обеспечения. Некоторые из них:

Принцип DRY (Don't Repeat Yourself): Этот принцип призывает избегать повторения кода в программе. Логика или функциональность, которая используется более одного раза, должна быть вынесена в отдельное место (функцию, класс, модуль) и использоваться повторно.

Принцип KISS (Keep It Simple, Stupid): Принцип простоты гласит, что программное обеспечение должно быть максимально простым в своей реализации. Программисты должны стремиться к минимальной сложности, избегая излишней сложности и избыточности.

Принцип YAGNI (You Ain't Gonna Need It): Этот принцип утверждает, что не следует реализовывать функциональность, которая не требуется в данный момент. Избегайте написания кода на будущее и фокусируйтесь только на текущих требованиях.

Принцип композиции (Composition Over Inheritance): Этот принцип говорит о том, что лучше использовать композицию объектов, чем наследование классов, для достижения повторного использования кода и гибкой конфигурации объектов.

Принцип единственной ответственности (Single Responsibility Principle, SRP): Класс или модуль должны иметь только одну причину для изменения. Каждая часть программы должна быть ответственна только за одну задачу или функциональность.

Принцип открытости/закрытости (Open/Closed Principle, OCP): Код должен быть открыт для расширения, но закрыт для модификации. Это означает, что новая функциональность должна добавляться через расширение, а не путем изменения существующего кода.

Принцип инверсии зависимостей (Dependency Inversion Principle, DIP): Классы или модули должны зависеть от абстракций, а не от конкретных реализаций. Это позволяет легко заменять реализацию без изменения кода, что облегчает тестирование и поддержку.

Принцип единообразия (Uniformity Principle): Код должен быть написан в одном стиле и следовать общим соглашениям о форматировании, именовании и организации. Это улучшает читаемость и поддерживаемость кода.

Это лишь несколько примеров принципов разработки программного обеспечения. Существуют и другие принципы, и их выбор и применение зависит от конкретного контекста и задачи разработки.

**Что такое дескрипторы свойств объектов?**

Дескрипторы свойств объектов (property descriptors) в JavaScript - это объекты, которые описывают атрибуты свойств объекта, такие как возможность чтения, записи, наличие или отсутствие свойства и т. д. Они используются в методах Object.defineProperty() и Object.defineProperties() для определения или изменения свойств объекта.

**В чем заключаются особенности геттеров и сеттеров?**

Особенности геттеров и сеттеров:

- Геттеры (getters) - это методы, которые используются для получения значения свойства объекта. Они вызываются при обращении к свойству с использованием синтаксиса доступа к свойству (например, obj.property).
- Сеттеры (setters) - это методы, которые используются для установки значения свойства объекта. Они вызываются при присваивании значения свойству с использованием синтаксиса доступа к свойству (например, obj.property = value).
Основная особенность геттеров и сеттеров заключается в том, что они позволяют управлять доступом к свойствам объекта и выполнять дополнительные действия при чтении или записи значения свойства. Это может быть полезно, например, для валидации входных данных или автоматического обновления связанных свойств.

**Что такое статический метод класса (static)? Как осуществляется его вызов?**

Статический метод класса (static method) в JavaScript - это метод, который принадлежит самому классу, а не его экземплярам. Он может быть вызван непосредственно на классе без создания экземпляра.

Вызов статического метода осуществляется через имя класса, а не через экземпляр класса. Например, если у вас есть класс MyClass с статическим методом myMethod, вызов будет выглядеть следующим образом: MyClass.myMethod().

**Разница между композицией и наследованием?**

Разница между композицией и наследованием:

- Наследование (inheritance): Это механизм, который позволяет классу наследовать свойства и методы от другого класса. Класс, который наследует свойства, называется подклассом или производным классом, а класс, от которого наследуются свойства, называется суперклассом или базовым классом. Наследование формирует иерархию классов.

- Композиция (composition): Это механизм, который позволяет создавать более сложные объекты, объединяя их из более простых объектов или компонентов. Компоненты в композиции могут быть экземплярами классов или другими объектами. Композиция формирует отношение "имеет" или "состоит из".

**Что такое композиция в контексте JavaScript?**

В контексте JavaScript композиция означает создание объекта, который содержит ссылки на другие объекты и делегирует вызовы к ним. Это может быть достигнуто, например, путем создания свойств объекта, которые ссылаются на другие объекты или через использование функций-оберток, которые вызывают соответствующие методы других объектов.

**Что такое паттерн, или шаблон проектирования?**

Паттерн или шаблон проектирования - это решение для типичной проблемы в разработке программного обеспечения. Он представляет собой описания архитектурных конструкций, повторяющихся в разных проектах, и устанавливает рекомендуемые подходы к их использованию.

**Типы паттернов?**

Некоторые типы паттернов:

- Порождающие паттерны (Creational Patterns): Определяют механизмы создания объектов.
- Структурные паттерны (Structural Patterns): Определяют способы композиции объектов и классов в более крупные структуры.
- Поведенческие паттерны (Behavioral Patterns): Определяют способы взаимодействия между объектами и распределение обязанностей между ними.

**Что такое GOF паттерны?**

GOF (Gang of Four) паттерны - это набор паттернов проектирования, предложенных Эрихом Гаммой, Ричардом Хелмом, Ральфом Джонсоном и Джоном Влиссидесом в книге "Design Patterns: Elements of Reusable Object-Oriented Software". Эта книга считается классическим справочником по паттернам проектирования.

**Что такое GRASP паттерны?**

GRASP (General Responsibility Assignment Software Patterns) паттерны - это набор принципов, предлагаемых Крэгом Ларманом в его книге "Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design". Они направлены на выделение обязанностей между классами и объектами в системе.

**Типы полиморфизма?**

Типы полиморфизма:

- Полиморфизм подтипов (Subtype Polymorphism): Возможность использования объектов производных классов через интерфейс базового класса.
- Параметрический полиморфизм (Parametric Polymorphism): Возможность создания обобщенных функций или классов, которые могут работать с различными типами данных.
- Ad hoc полиморфизм (Ad hoc Polymorphism): Возможность одной функции иметь различное поведение в зависимости от типов аргументов.

**Можно ли в JavaScript реализовать абстрактный класс и как это сделать?**

В JavaScript нет явного механизма для создания абстрактных классов, как в некоторых других языках. Однако абстрактные классы можно эмулировать, используя функции-конструкторы и прототипы.

Пример создания абстрактного класса в JavaScript:

```
function AbstractClass() {
  if (this.constructor === AbstractClass) {
    throw new Error("Cannot instantiate abstract class");
  }
}

AbstractClass.prototype.abstractMethod = function() {
  throw new Error("Abstract method must be overridden");
};

// Пример наследования от абстрактного класса
function ConcreteClass() {
  AbstractClass.call(this);
}

ConcreteClass.prototype = Object.create(AbstractClass.prototype);
ConcreteClass.prototype.constructor = ConcreteClass;

ConcreteClass.prototype.abstractMethod = function() {
  // Реализация абстрактного метода
};
```

**Как работает механизм прототипов в JavaScript?**

Механизм прототипов в JavaScript позволяет объектам наследовать свойства и методы от других объектов. Когда свойство или метод вызывается на объекте, JavaScript сначала ищет его в самом объекте. Если свойство не найдено, он будет искать его в цепочке прототипов объекта до глобального объекта Object.prototype. Это позволяет делиться свойствами и методами между объектами без необходимости создавать копии для каждого объекта.

**Основные принципы функционального программирования?**

1. Функции являются основными строительными блоками: Функциональное программирование ставит функции в центр разработки. Функции рассматриваются как математические отображения, которые принимают входные данные и возвращают результаты. Они не имеют состояния и не изменяют данные вне своего контекста.

2. Неизменяемость данных: В функциональном программировании данные считаются неизменяемыми (immutable). Это означает, что после создания объекта его состояние не может быть изменено. Вместо этого, при выполнении операций с данными создаются новые объекты.

3. Отсутствие побочных эффектов: Функциональное программирование стремится к минимизации или полному исключению побочных эффектов. Побочные эффекты включают изменение состояния программы, мутацию данных и взаимодействие с внешней средой. Функции в функциональном программировании должны быть чистыми и предсказуемыми, возвращая результаты только на основе своих входных данных.

4. Рекурсия: Функциональное программирование активно использует рекурсию для итерации и обработки данных. Рекурсивные функции вызывают сами себя с новыми аргументами, пока не достигнут базовый случай, который останавливает рекурсию.

**Плюсы функционального программирования?**

1. Безопасность: Благодаря неизменяемости данных и отсутствию побочных эффектов, функциональное программирование способствует написанию безопасного и предсказуемого кода. Это уменьшает возможность ошибок и облегчает отладку и тестирование программ.

2. Модульность и переиспользуемость: Функциональный стиль программирования позволяет создавать модули, которые могут быть легко переиспользованы в разных частях программы или даже в других проектах. Функции, не имеющие побочных эффектов и зависящие только от своих входных данных, обладают большей независимостью и могут быть более гибко применены.

3. Параллелизм и конкурентность: Функциональное программирование способствует легкой реализации параллелизма и конкурентности в программе. Благодаря отсутствию изменяемого состояния и побочных эффектов, функции могут выполняться независимо друг от друга, что упрощает использование многопоточности и распределенных систем.

**Разница между императивным и декларативным подходами программирования?**

- Императивное программирование: Это стиль программирования, который описывает последовательность шагов или команд для выполнения задачи. Здесь программист указывает, как должна быть выполнена задача и контролирует изменение состояния программы. Примеры императивных языков программирования включают C, Java и Python.

- Декларативное программирование: Это стиль программирования, который описывает, что должно быть сделано, нежели как это должно быть сделано. Программист описывает желаемый результат или свойства задачи, а не последовательность шагов для его достижения. Декларативный код фокусируется на описании логики, а не на управлении состоянием программы. Примеры декларативных языков программирования включают SQL для работы с базами данных или язык запросов, такие как Prolog.

Разница между императивным и декларативным подходами состоит в том, что императивное программирование подразумевает явное указание шагов для выполнения задачи, тогда как декларативное программирование описывает желаемый результат без явного указания шагов для его достижения. В декларативном программировании уделяется больше внимания "что" должно быть сделано, в то время как в императивном программировании больше внимания уделяется "как" это должно быть сделано.