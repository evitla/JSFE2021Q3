import baseComponent from '../baseComponent';

import './style.scss';

const footer = baseComponent('footer', ['footer']);

footer.innerHTML = `
  <button class="change-quote"></button>
  <div>
    <div class="quote"></div>
    <div class="author"></div>
  </div>
`;

export default footer;
