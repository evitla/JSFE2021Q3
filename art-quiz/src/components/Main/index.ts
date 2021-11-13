import BaseComponent from '../BaseComponent';
import Logo from '../Logo';

import './style.scss';

class Main extends BaseComponent {
  private wrapper = new BaseComponent('div', ['wrapper']);

  private logo = new Logo(['logo-main']);

  constructor() {
    super('main', ['main']);
  }

  render(): void {
    this.wrapper.element.append(this.logo.element);
    this.element.append(this.wrapper.element);
  }
}

export default Main;
