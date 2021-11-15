import './style.scss';

class Button {
  readonly element: HTMLAnchorElement;

  constructor(
    content: string,
    styles: string[] = [],
    link = '#/',
    isDisabled = false
  ) {
    this.element = document.createElement('a');
    this.element.classList.add('button', ...styles);

    this.element.textContent = content;
    this.element.href = link;
    if (isDisabled) this.element.removeAttribute('href');
  }
}

export default Button;
