import BaseComponent from '../BaseComponent';

import './style.scss';

class Select extends BaseComponent {
  parentNode: HTMLElement;

  select = new BaseComponent('select');

  options: HTMLElement[];

  constructor(
    parentNode: HTMLElement,
    options: string[],
    style: string[] = []
  ) {
    super('div', style);

    this.options = options.map((option) => {
      const el = new BaseComponent('option').element;
      el.innerText = option;
      return el;
    });

    this.parentNode = parentNode;
  }

  render(): void {
    this.select.element.append(...this.options);
    this.element.appendChild(this.select.element);
    this.parentNode.appendChild(this.element);
  }

  afterRender(callback: (target: HTMLElement) => void): void {
    this.select.element.onchange = (e: MouseEvent) => {
      const target = e.target as HTMLSelectElement;

      if (target.value === null) return;

      callback(target);
    };
  }
}

export default Select;
