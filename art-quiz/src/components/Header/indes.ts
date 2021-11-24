import BaseComponent from '../BaseComponent';
import Logo from '../Logo';

import './style.scss';

import gear from '../../assets/images/gear.svg';

class Header extends BaseComponent {
  private wrapper = new BaseComponent('div', ['wrapper', 'header-wrapper']);

  private logo = new Logo(['header-logo'], false);

  private settingsIcon = new BaseComponent('a', ['gear-icon']);

  constructor() {
    super('header');

    this.settingsIcon.element.setAttribute('href', '#/settings');

    this.settingsIcon.element.innerHTML = `
      <img src=${gear} alt="settings" >
    `;

    this.wrapper.element.append(this.logo.element, this.settingsIcon.element);
  }

  async render(): Promise<void> {
    this.element.append(this.wrapper.element);
  }
}

export default Header;
