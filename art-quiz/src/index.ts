import Main from './components/Main';

import './styles/style.scss';

const main = new Main();
main.render();

document.body.innerHTML = `
  <h1 class="visually-hidden">Art-Quiz</h1>
`;

document.body.append(main.element);
