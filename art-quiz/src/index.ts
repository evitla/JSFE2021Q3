import Main from './components/Main';

import './styles/style.scss';

const main = new Main();
main.render();

document.body.append(main.element);
