import BaseComponent from '../BaseComponent';

import './style.scss';

class Snowflakes extends BaseComponent {
  parentNode: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super('div', ['snowflakes']);

    this.parentNode = parentNode;
  }

  render(): void {
    const snowflakes = '❅❆'.repeat(7);

    this.element.innerHTML = snowflakes
      .split('')
      .map((sf) => `<div class="snowflake">${sf}</div>`)
      .join('');

    this.parentNode.append(this.element);
  }
}

export default Snowflakes;
