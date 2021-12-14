import BaseComponent from '../../components/BaseComponent';
import BasePage from '../BasePage';

import './style.scss';

class Toys extends BasePage {
  private content = new BaseComponent('div', ['toys-content']);

  constructor() {
    super(['toys-page']);
  }

  async render(): Promise<void> {
    this.content.element.innerHTML = `
      <h2>Toys Page</h2>
    `;

    this.element.append(this.content.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Toys;
