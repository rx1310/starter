# starter [![Список изменений](https://img.shields.io/github/package-json/version/rx1310/starter/develop?label=%20)](CHANGELOG.md)

Стартовый шаблон для статичного сайта, написанный на [@11ty][gh_11ty], [@sass][gh_sass] (+ [@91muilak][gh_k19]) и [Nunjucks][gh_njk].

![Последний коммит](https://img.shields.io/github/last-commit/rx1310/starter)
[![GitHub branches](https://badgen.net/github/branches/rx1310/starter)](https://github.com/rx1310/starter/)
[![Github tag](https://badgen.net/github/tag/rx1310/starter)](https://github.com/rx1310/starter/tags/)
![Количество коммитов в год](https://img.shields.io/github/commit-activity/y/rx1310/starter)
![Количество ЯП](https://img.shields.io/github/languages/count/rx1310/starter?color=fff)
![Топ ЯП](https://img.shields.io/github/languages/top/rx1310/starter?color=C76494)
![Размер репозитория](https://img.shields.io/github/repo-size/rx1310/starter?color=ffb600)
![Размер кода](https://img.shields.io/github/languages/code-size/rx1310/starter)
[![Количество открытых issue](https://img.shields.io/github/issues-raw/rx1310/starter)
![Количество закрытых issues](https://img.shields.io/github/issues-closed-raw/rx1310/starter?color=354a6d)](https://github.com/rx1310/starter/issues)
[![Количество открытых PR](https://img.shields.io/github/issues-pr-raw/rx1310/starter?label=open%20PR%27s)
![Количество закрытых PR](https://img.shields.io/github/issues-pr-closed-raw/rx1310/starter?label=closed%20PR%27s)](https://github.com/rx1310/starter/pulls)
![Кол-во посетителей](https://visitor-badge.laobi.icu/badge?page_id=rx1310.starter)
![Лицензия](https://img.shields.io/github/license/rx1310/starter)

Актуальные версии зависимостей (main):

![Версия 11ty](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/@11ty/eleventy/main?color=fff)
![Версия SASS](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/sass/main?color=CC6699)
![Версия Kalium19](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/@rx1310/kalium19/main?color=000)
![Версия nunjucks](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/nunjucks/main?color=1f4219)
![Версия markdown-it](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/markdown-it/main?label=markdown-it)
![Версия js-yaml](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/js-yaml/main?color=ea8a27)
![Версия html-minifier](https://img.shields.io/github/package-json/dependency-version/rx1310/starter/dev/html-minifier/main?color=E34F26)

[Открыть доску задач →][gh_project]

> Проект разрабатывается в личных целях для оценки своих навыков и ради того, чтобы научить себя писать нормальный, осознанный код (+ учиться документировать свой код). Буду раз вашим [Issues](https://github.com/rx1310/starter/issues) по поводу исправления ошибок, добавления новых фич и улучшению проекта. Также со мной можно связаться в [Telegram (@rx1310)][rx1310_tg].

Проект был создан для упрощения создания сайта на базе генератора статики **11ty**. Шаблон **starter** может быть интересен тем, что:
- не нужно с нуля создавать проект и его структуру,
- не нужно проектировать интерфейс и писать стили,
- можно легко сконфигурировать проект под свои нужды,
- ...

## Начало работы
Перед началом нужно уточнить используемый софт, который требуется (или желателен) для начала работы:

1. [Node.js][nodejs] - требуется для работы менеджера пакетов [npm][npm],
2. [Visual Studio Code][vscode] <sup>(необяз.)</sup> - редактор кода, для которого прописаны в проекте кое-какие настройки,
3. [Git][git]

И в принципе всё. Дальше процесс клонирования репозитория:

1. Клонируем репозиторий проекта в нужную папку:

    ```bash
    git clone https://github.com/rx1310/starter my_project
    ```
    > `my_project` - имя вашего проекта.

2. Установка зависимостей **npm**:

    ```bash
    npm i # псевдоним команды npm install
    ```

3. Удаление ненужных файлов и папок:
    - [.git/](.git/) - папка Git (не нужна, если не собираетесь контрибьютить в starter)
    - [.vscode/](.vscode/) - если пользуетесь другим редактором кода, то для вас эта папка бесполезна
    - [.github/](.github/) - папка с файлами для [GitHub-репозитория](https://github.com/rx1310/starter)
    - [CHANGELOG.md](CHANGELOG.md) - история изменений шаблона
    - [README.md](README.md) - если эта информация, которую вы сейчас читаете вам больше не нужна

## Запуск
Все основные скрипты лежат в файле [package.json](package.json). Для разработки используется команда `npm run start`.

| команда        | описание                                        |
| -------------- | ----------------------------------------------- |
| `start`        | запуск вотчера SASS и локального сервера с 11ty |
| `11ty:build`   | сборка шаблонов (njk, md, etc..)                |
| `11ty:serve`   | запуск локального сервера с 11ty                |
| `sass:compile` | сборка SCSS-файлов в CSS                        |
| `sass:watch`   | запуск вотчера SCSS-файлов                      |

## Конфигурация
Для начала уточню структуру проекта. Весь основной код находится в папке [app/](app/), структуру которой можно посмотреть при помощи команды [`tree app`](https://losst.ru/komanda-tree-linux).

### 11ty
Итоговый (output) сайт будет находиться в папке dist/. За это отвечает файл конфигурации 11ty [.11ty.js](.11ty.js).

```js
// .11ty.js
dir: {
  input   : 'app',       // входная точка
  output  : 'dist',      // папка, в которую будет собран сайт
  includes: 'includes/', // шаблоны njk
  layouts : 'layouts/',  // шаблоны разметок njk
  data    : "data"       // папка, в которой хранятся JSON / YAMl второстепенные файлы с конфигурацией
}
```

> В этом же файле прописаны настройки для плагинов 11ty, в т.ч. markdown-it, BrowserSync, html-minifier, js-yaml и прочие.

### BrowserSync
По умолчанию в конфиге [BrowserSync](https://browsersync.io/) прописан автозапуск браузера Chromium. Изменить это можно в [.11ty.js](.11ty.js):

```js
cnf.setBrowserSyncConfig({

  // ...
  open     : true,
  browser  : ["chromium-browser"]

});
```

> Если вам нужен, например, браузер Google Chrome, то пропишите `["google chrome"]`, а если нужен Google Chrome и Mozilla Firefox - `["google chrome", "firefox"]` в параметр `browser`.

### SASS
Основной файл стилей - это [main.scss](app/styles/main.scss), к которому подключаются модули и прочее.

Есть отдельная папка [styles/vendor/](app/styles/vendor/), в которой содержатся сторонние библиотеки, которые в основном в [main.scss](app/styles/main.scss) не добавляются. Собираются они также в папку *dist/styles/vendor/*.

[Подробнее →](app/styles/README.md)

## Лицензия
Проект [starter](https://github.com/rx1310/starter) распространяется совершенно бесплатно и находится под защитой лицензии [MIT](LICENSE).

Инструментарий, используемый в разработке, распространяется по указанной автором / компанией / разработчиком лицензии, не зависящей от этого проекта!

```
MIT License
Copyright (c) 2022, Haba Kudzaev (rx1310) <rx1310@inbox.ru>
```

> Если Вы нашли нарушение чьей-либо лицензии в моем проекте, то просьба написать мне → [Telegram][rx1310_tg], [эл. почта][rx1310_mail] или [VK][rx1310_vk].

[gh_11ty]: https://github.com/11ty
[gh_sass]: https://github.com/sass
[gh_k19]: https://github.com/91muilak
[gh_njk]: https://github.com/mozilla/nunjucks
[gh_project]: https://github.com/users/rx1310/projects/3
[vscode]: https://code.visualstudio.com/
[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/
[rx1310_tg]: https://t.me/rx1310
[rx1310_vk]: https://vk.com/rx1310
[rx1310_mail]: mailto:rx1310@inbox.ru
