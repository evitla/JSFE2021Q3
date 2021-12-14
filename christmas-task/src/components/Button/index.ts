import BaseComponent from '../BaseComponent';

import './style.scss';

class Button extends BaseComponent {
  parentNode: HTMLElement;

  content: string;

  href: string;

  constructor(
    parentNode: HTMLElement,
    content: string,
    styles: string[] = [],
    href = ''
  ) {
    super('button', ['button', ...styles]);

    this.parentNode = parentNode;
    this.content = content;
    this.href = href;
  }

  render(): void {
    this.element.innerHTML = this.content;

    this.parentNode.appendChild(this.element);
  }

  afterRender(callback: () => void): void {
    if (this.href) {
      this.element.onclick = () => {
        const link = document.createElement('a');
        link.href = this.href;
        link.click();
        callback();
      };
    }
  }
}

export default Button;
