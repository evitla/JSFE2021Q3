import BaseComponent from '../../components/BaseComponent';
import Button from '../../components/Button';
import BasePage from '../BasePage';

import './style.scss';

class Home extends BasePage {
  private content = new BaseComponent('div', ['home-content']);

  private startButton = new Button(
    this.content.element,
    'Start Game',
    ['button-primary']
    // '#/categories'
  );

  constructor() {
    super(['home-page']);
  }

  async render(): Promise<void> {
    this.content.element.innerHTML = `
      <h1>Decorate the Christmas Tree</h1>
    `;

    this.startButton.render();

    this.element.append(this.content.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Home;
