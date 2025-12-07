// Данные для таймлайна
const timelineData = [
    {
        year: 1943-1945,
        title: "Планкалкюль",
        description: "Первый в мире язык программирования высокого уровня, разработанный Конрадом Цузе. Хотя он никогда не был реализован при жизни Цузе, он содержал многие концепции современных языков.",
        languages: ["Планкалкюль"],
        era: "early",
        icon: "fas fa-calculator"
    },
    {
        year: 1957,
        title: "Фортран",
        description: "Первый коммерчески успешный язык программирования высокого уровня. Создан Джоном Бэкусом в IBM для научных и инженерных вычислений.",
        languages: ["Фортран"],
        era: "early",
        icon: "fas fa-atom"
    },
    {
        year: 1958,
        title: "LISP",
        description: "Второй старейший язык программирования высокого уровня после Фортрана. Создан Джоном Маккарти для исследований в области искусственного интеллекта.",
        languages: ["LISP"],
        era: "early",
        icon: "fas fa-brain"
    },
    {
        year: 1959,
        title: "COBOL",
        description: "Язык для бизнес-приложений, разработанный комитетом CODASYL. Широко использовался в банковских и финансовых системах.",
        languages: ["COBOL"],
        era: "early",
        icon: "fas fa-building"
    },
    {
        year: 1964,
        title: "BASIC",
        description: "Язык для начинающих, созданный в Дартмутском колледже. Стал чрезвычайно популярным с появлением персональных компьютеров.",
        languages: ["BASIC"],
        era: "middle",
        icon: "fas fa-graduation-cap"
    },
    {
        year: 1970,
        title: "Pascal",
        description: "Язык, созданный Никлаусом Виртом для обучения структурному программированию. Влиял на многие последующие языки.",
        languages: ["Pascal"],
        era: "middle",
        icon: "fas fa-book"
    },
    {
        year: 1972,
        title: "Язык C",
        description: "Разработан Деннисом Ритчи в Bell Labs. Стал основой для операционных систем Unix и повлиял на большинство современных языков.",
        languages: ["C"],
        era: "middle",
        icon: "fas fa-microchip"
    },
    {
        year: 1978,
        title: "SQL",
        description: "Язык структурированных запросов для работы с реляционными базами данных. Разработан в IBM Дональдом Чемберлином и Реймондом Бойсом.",
        languages: ["SQL"],
        era: "middle",
        icon: "fas fa-database"
    },
    {
        year: 1983,
        title: "C++",
        description: "Расширение языка C с поддержкой объектно-ориентированного программирования. Создан Бьёрном Страуструпом.",
        languages: ["C++"],
        era: "modern",
        icon: "fas fa-plus-circle"
    },
    {
        year: 1987,
        title: "Perl",
        description: "Скриптовый язык для обработки текстов и системного администрирования. Создан Ларри Уоллом.",
        languages: ["Perl"],
        era: "modern",
        icon: "fas fa-scroll"
    },
    {
        year: 1991,
        title: "Python",
        description: "Высокоуровневый язык общего назначения с акцентом на читаемость кода. Создан Гвидо ван Россумом.",
        languages: ["Python"],
        era: "modern",
        icon: "fab fa-python"
    },
    {
        year: 1995,
        title: "JavaScript, Java, PHP",
        description: "Год трёх революционных языков: JavaScript для веба, Java для кроссплатформенных приложений, PHP для серверной веб-разработки.",
        languages: ["JavaScript", "Java", "PHP"],
        era: "modern",
        icon: "fas fa-bolt"
    },
    {
        year: 2000,
        title: "C#",
        description: "Объектно-ориентированный язык от Microsoft, разработанный Андерсом Хейлсбергом как часть платформы .NET.",
        languages: ["C#"],
        era: "modern",
        icon: "fas fa-hashtag"
    },
    {
        year: 2009,
        title: "Go",
        description: "Язык от Google, созданный Робертом Гриземером, Робом Пайком и Кеном Томпсоном для системного программирования.",
        languages: ["Go"],
        era: "modern",
        icon: "fas fa-running"
    },
    {
        year: 2014,
        title: "Swift",
        description: "Язык от Apple для разработки iOS и macOS приложений. Создан как замена Objective-C с современным синтаксисом.",
        languages: ["Swift"],
        era: "modern",
        icon: "fas fa-mobile-alt"
    }
];

// Данные для карточек языков
const languagesData = [
    {
        name: "Python",
        year: 1991,
        creator: "Гвидо ван Россум",
        description: "Высокоуровневый язык с акцентом на читаемость кода. Используется в веб-разработке, data science, AI.",
        tags: ["Высокоуровневый", "Интерпретируемый", "ООП"],
        icon: "fab fa-python",
        color: "#3776AB"
    },
    {
        name: "JavaScript",
        year: 1995,
        creator: "Брендан Эйх",
        description: "Язык для создания интерактивных веб-страниц. Также используется на сервере (Node.js).",
        tags: ["Интерпретируемый", "Прототипный", "Вещный"],
        icon: "fab fa-js",
        color: "#F7DF1E"
    },
    {
        name: "Java",
        year: 1995,
        creator: "Джеймс Гослинг",
        description: "Кроссплатформенный объектно-ориентированный язык. Широко используется в enterprise-разработке.",
        tags: ["Компилируемый", "ООП", "Кроссплатформенный"],
        icon: "fab fa-java",
        color: "#007396"
    },
    {
        name: "C",
        year: 1972,
        creator: "Деннис Ритчи",
        description: "Язык системного программирования. Основа для операционных систем и многих других языков.",
        tags: ["Компилируемый", "Процедурный", "Системный"],
        icon: "fas fa-c",
        color: "#A8B9CC"
    },
    {
        name: "C++",
        year: 1983,
        creator: "Бьёрн Страуструп",
        description: "Расширение языка C с поддержкой объектно-ориентированного и обобщённого программирования.",
        tags: ["Компилируемый", "ООП", "Системный"],
        icon: "fas fa-plus-circle",
        color: "#00599C"
    },
    {
        name: "C#",
        year: 2000,
        creator: "Андерс Хейлсберг",
        description: "Современный объектно-ориентированный язык от Microsoft для платформы .NET.",
        tags: ["Компилируемый", "ООП", "Управляемый"],
        icon: "fas fa-hashtag",
        color: "#239120"
    },
    {
        name: "PHP",
        year: 1995,
        creator: "Расмус Лердорф",
        description: "Скриптовый язык для веб-разработки. Широко используется с системами управления контентом.",
        tags: ["Интерпретируемый", "Серверный", "Вещный"],
        icon: "fab fa-php",
        color: "#777BB4"
    },
    {
        name: "Swift",
        year: 2014,
        creator: "Apple Inc.",
        description: "Современный язык для разработки iOS и macOS приложений. Замена Objective-C.",
        tags: ["Компилируемый", "ООП", "Безопасный"],
        icon: "fas fa-mobile-alt",
        color: "#FA7343"
    },
    {
        name: "Go",
        year: 2009,
        creator: "Google",
        description: "Язык для системного программирования с упором на простоту, эффективность и параллелизм.",
        tags: ["Компилируемый", "Статический", "Параллельный"],
        icon: "fas fa-running",
        color: "#00ADD8"
    },
    {
        name: "Rust",
        year: 2010,
        creator: "Mozilla",
        description: "Язык системного программирования, фокусирующийся на безопасности, скорости и параллелизме.",
        tags: ["Компилируемый", "Безопасный", "Системный"],
        icon: "fas fa-shield-alt",
        color: "#DEA584"
    }
];

// Данные для таблицы сравнения
const comparisonData = [
    { language: "Python", year: 1991, type: "Высокоуровневый", paradigm: "Мультипарадигмальный", complexity: 2, usage: "Веб, Data Science, AI" },
    { language: "JavaScript", year: 1995, type: "Высокоуровневый", paradigm: "Прототипный, Функциональный", complexity: 3, usage: "Веб-разработка" },
    { language: "Java", year: 1995, type: "Высокоуровневый", paradigm: "Объектно-ориентированный", complexity: 4, usage: "Enterprise, Android" },
    { language: "C", year: 1972, type: "Среднего уровня", paradigm: "Процедурный", complexity: 4, usage: "Системное программирование" },
    { language: "C++", year: 1983, type: "Среднего уровня", paradigm: "Мультипарадигмальный", complexity: 5, usage: "Системы, игры" },
    { language: "C#", year: 2000, type: "Высокоуровневый", paradigm: "Объектно-ориентированный", complexity: 3, usage: ".NET, игры" },
    { language: "PHP", year: 1995, type: "Высокоуровневый", paradigm: "Императивный, ООП", complexity: 3, usage: "Веб-разработка" },
    { language: "Swift", year: 2014, type: "Высокоуровневый", paradigm: "Мультипарадигмальный", complexity: 3, usage: "iOS/macOS приложения" },
    { language: "Go", year: 2009, type: "Высокоуровневый", paradigm: "Процедурный, ООП", complexity: 3, usage: "Серверы, утилиты" },
    { language: "Rust", year: 2010, type: "Системный", paradigm: "Мультипарадигмальный", complexity: 5, usage: "Системное программирование" }
];
