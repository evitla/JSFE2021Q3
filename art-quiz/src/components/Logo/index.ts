import BaseComponent from '../BaseComponent';

import './style.scss';

import logoImage from '../../assets/images/logo.svg';

class Logo extends BaseComponent {
  constructor(styles: string[] = [], withTitle = true) {
    super('div', ['logo', ...styles]);

    this.element.innerHTML = `
      <a href="#/">
        <img class="logo-image" src=${logoImage} alt="logo">
        ${withTitle ? '<h1 class="logo-title">Art Quiz</h1>' : ''}
      </a>
    `;
  }
}

export default Logo;
