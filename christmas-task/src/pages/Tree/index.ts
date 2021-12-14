import BaseComponent from '../../components/BaseComponent';
import BasePage from '../BasePage';

import './style.scss';

class Tree extends BasePage {
  private content = new BaseComponent('div', ['tree-content']);

  constructor() {
    super(['tree-page']);
  }

  async render(): Promise<void> {
    this.content.element.innerHTML = `
      <h2>Tree Page</h2>
    `;

    this.element.append(this.content.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Tree;
