<h1 id="heading">🏍️🏍️🏍️ surron-ecommerce</h1>
 Welcome to the repository of the surron-ecommerce training project, created
    as part of the JavaScript/Front-end Course at RS School. The purpose of this
    project is to learn how to work with CommerceTools, master all the necessary
    technologies and gain experience working in a team.
    <br><br>
    <blockquote>
      <b>NB!</b> To work with the project, <b>Node.js</b> must be installed on
      your computer. The minimum version on which the project is being tested is
      <b>18</b>. Also, to work on the project, you need an account in
      <b>CommerceTools</b> (to fill in all the necessary fields in the
      <code>.env</code> file).
    </blockquote>
    <hr>
<h2 id="github-workflow">🏍️ How to work with the repository</h2>
 To work with this repository you need:
    <br><br>
    <ol>
      <li>
        Clone this repository to your computer using the command:
        <br><code
          >git clone git@github.com:godlikeAlex/surron-ecommerce.git</code
        >
      </li>
      <li>
        Go to the project folder:
        <br><code>cd surron-ecommerce</code>
      </li>
      <li>
        Install all necessary dependencies:
        <br><code>npm i</code>
      </li>
      <li>
        Add a folder with settings for husky to correctly check possible future
        commits:
        <br><code>npm run prepare</code>
      </li>
      <li>
        Go to the branch of the project you are interested in, for example,
        develop:
        <br><code>git checkout develop</code>
      </li>
      <li>
        Find a file in the project called <code>.env.example</code>, copy it,
        rename the created copy to <code>.env</code> and fill in the values of
        the corresponding variables in the file with the data obtained in
        CommerceTools.
      </li>
      <li>
        Launch the project (the developer mode launch option is specified, other
        launch options can be found in the [scripts section]
        (#scripts-section):
        <br><code>npm run dev</code>
      </li>
    </ol>
    <hr>
<h2 id="used-stack">🏍️ Используемые технологии</h2>
При работе над данным проектом были использованы:
<br><br>

<li> <b>Typescript</b> — инструмент, расширяющий возможности JavaScript благодаря статической типизации.</li>
<li> <b>React</b> — одна из самым популярных фронтенд-библиотек.
<li> <b>Vite</b> — инструмент для настройки среды разработки и сборки проекта.</li>
<li> <b>React-router</b> — библиотека для навигации между разными частями веб-приложения, созданными при помощи React.</li>
<li> <b>Vitest</b> — одна из самых популярных сред тестирования на базе Vite.</li>
<li> <b>Eslint</b> — инструмент статического анализа кода.</li>
<li> <b>Husky</b> — инструмент для автоматической проверки коммитов.</li>
<li> <b>Prettier</b> — инструмент для автоматического форматирования кода.</li>
<li> <b>Zustand</b> — популярная библиотека для управления состоянием React-приложений.</li>
<li> <b>Mantine UI</b> — популярный фреймворк для создания пользовательского интерфейса на основе React.</li>
<li> <b>React Hook Form</b> — библиотека для работы с формами в React-приложениях.</li>
<li> <b>TanStack Query</b> — библиотека для выполнения запросов данных и управления состоянием приложения на основе GraphQL.</li>
<hr>
<h2 id="scripts-section">🏍️ Полезные скрипты для работы над проектом</h2>
При работе над проектом вам могут пригодиться следующие скрипты:
<br><br>
<li> <b>dev</b> — запуск проекта в режиме разработчика.</li>
<li> <b>build</b> — сборка готовой версии проекта.</li>
<li> <b>test</b> — прогон тестов Vitest с выводом результатов в консоль.</li>
<li> <b>test:watch</b> — запуск тестов Vitest в режим watching с выводом результатом в отдельную вкладку браузера.</li>
<li> <b>coverage</b> — прогон тестов Vitest с выводом результатов и таблицы покрытия тестами в консоль.</li>
<li> <b>coverage:watch</b> — запуск тестов Vitest в режим watching с выводом результатов и таблицы покрытия тестами в отдельную вкладку браузера.</li>
<li> <b>lint</b> — проверка всего написанного в проекте кода инструментом статического анализа кода eslint.</li>
<li> <b>preview</b> — запуск просмотра предварительно собранной (при помощи скрипта <b>build</b>)версии проекта.</li>
<li> <b>prepare</b> — добавления настроек для husky, инструмента для автоматической проверки коммитов.</li>
<li> <b>format</b> — запуск автоматического форматирования всего написанного в проекте кода инструментом для форматирования prettier с выводом списка файлов, к которым было применено форматирование.</li>
<li> <b>ci:format</b> — проверка всего написанного в проекте кода инструментом для форматирования prettier с выводом списка файлов, не соответствующих требуемому форматированию.</li>
<hr>
