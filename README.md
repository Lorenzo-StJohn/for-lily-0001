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
        launch options can be found in the <a href="#scripts-section">scripts section</a>:
        <br><code>npm run dev</code>
      </li>
    </ol>
    <hr>
<h2 id="used-stack">🏍️ Technology stack used</h2>
 When working on this project the following were used:
    <br><br>
    <li>
      <b>Typescript</b> — tool that extends the capabilities of JavaScript
      through static typing.
    </li>
    <li><b>React</b> — one of the most popular frontend libraries.</li>
    <li>
      <b>Vite</b> — tool for configuring the development environment and
      building a project.
    </li>
    <li>
      <b>React-router</b> — library for navigating between different parts of a
      web application created using React.
    </li>
    <li><b>Vitest</b> — modern unit testing framework powered by Vite.</li>
    <li>
      <b>Eslint</b> — static code analysis tool for identifying problematic
      patterns found in Javascript/Typescript code.
    </li>
    <li>
      <b>Husky</b> — popular Git hook tool that makes sure to format and fix
      code before committing.
    </li>
    <li><b>Prettier</b> — opinionated code formatter.</li>
    <li><b>Zustand</b> — popular state management library.</li>
    <li><b>Mantine UI</b> — popular React component library.</li>
    <li>
      <b>React Hook Form</b> — one of the most popular React form library.
    </li>
    <li>
      <b>TanStack Query</b> — popular library for managing server state in React
      applications.
    </li>
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
