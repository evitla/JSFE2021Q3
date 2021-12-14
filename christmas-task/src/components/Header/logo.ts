import BaseComponent from '../BaseComponent';

import logoIcon from '../../assets/svg/logo.svg';

class Logo extends BaseComponent {
  parentNode: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super('div', ['logo']);

    this.parentNode = parentNode;
  }

  render(): void {
    this.element.innerHTML = `
      <a href="#/">
        <img class="logo-image" src=${logoIcon} alt="logo">
      </a>
    `;

    this.parentNode.appendChild(this.element);
  }
}

export default Logo;
