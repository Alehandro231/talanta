# Like books

## 💻 Требования к окружению
* Node.js 12+
* Git

## 🏗️ Сборка

```bash
# Development
yarn dev

Запускает приложение в режиме разработки.
Открой [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

Страница перезагрузится, если вы внесете изменения.
Вы также увидите любые ошибки lint в консоли.

# Production
yarn build

Создает приложение для производства в папке "build".
Он правильно связывает реакцию в производственном режиме и оптимизирует сборку для достижения наилучшей производительности.

Сборка уменьшена, а имена файлов включают хэши.
Ваше приложение готово к deployment!

См. Раздел о [deployment](https://facebook.github.io/create-react-app/docs/deployment ) для получения дополнительной информации.

```

## 🧪 Автотесты

```bash
yarn test

Запускает тестовый запуск в режиме интерактивного просмотра.\
См. Раздел о [выполнении тестов](https://facebook.github.io/create-react-app/docs/running-tests ) для получения дополнительной информации.

```

### Особенности сборки
* создано средствами *create-react-app*

## ⚙️ Стек технологий
* [TypeScript](https://www.typescriptlang.org/docs/home.html)
* [React](https://ru.reactjs.org/docs/getting-started.html)
* [Redux Toolkit](https://redux-toolkit.js.org/api/configureStore)
* [Webpack](https://webpack.js.org/concepts/)
* [Babel](https://babeljs.io/docs/en/)
* [Prettier](https://prettier.io/docs/en/install.html)
* [Jest](https://jestjs.io/docs/en/getting-started)

## 🗄️ Правила ведения стора
* Логика внутри reducer'ов не выше уровня CRUD, логика должна быть заключена в action creator'ах, при этом, по возможности, максимально вытеснена в selector'ы
* Ветки стора разбиваются в директории `src/store/*` и объединяются в `src/store/index`
* Структура веток:
  * **/actions.ts** - синхронные и ассинхронные action'ы
  * **/selectors.ts** - селекторы
  * **/hooks.ts** - фасадные хуки для работы с данными ветки
  * **/index.ts** - реализация `reducer'a` и реэкспорт остальных сущностей
  * **/__tests__** - автотесты

## 📚 Внутренние библиотеки `src/lib`

**TO DO**

### Правила ведения
* Если какая-то логика переиспользуется внутри проекта и не является компонентом, должна быть вынесена в папку `src/lib`
* Структура библиотек:
  * **/index.ts** - реализация библиотеки
  * **/reabme.md** - документация
  * **/__tests__** - автотесты
