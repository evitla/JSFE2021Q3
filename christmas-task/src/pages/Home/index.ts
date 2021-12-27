import BaseComponent from '../../components/BaseComponent';
import Button from '../../components/Button';
import BasePage from '../BasePage';
import { PageClassNameType } from '../../types';

import './style.scss';

class Home extends BasePage {
  private content = new BaseComponent('div', ['home-content']);

  private startButton = new Button(
    this.content.element,
    'Start Game',
    ['button-primary'],
    '#/tree'
  );

  constructor(name: PageClassNameType) {
    super(name);
  }

  async render(): Promise<void> {
    this.content.element.innerHTML = `
      <h1>Decorate the Christmas Tree</h1>
    `;

    this.startButton.render();

    this.element.append(this.content.element);
  }

  async afterRender(): Promise<void> {
    this.startButton.afterRender(() => {
      document.getElementById('tree').classList.add('active');
    });
  }
}

export default Home;
