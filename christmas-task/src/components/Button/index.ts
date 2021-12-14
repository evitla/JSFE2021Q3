import BaseComponent from '../BaseComponent';

import './style.scss';

class Button extends BaseComponent {
  parentNode: HTMLElement;

  content: string;

  constructor(parentNode: HTMLElement, content: string, styles: string[] = []) {
    super('button', ['button', ...styles]);

    this.parentNode = parentNode;
    this.content = content;
  }

  render(): void {
    this.element.innerHTML = this.content;

    this.parentNode.appendChild(this.element);
  }
}

export default Button;
