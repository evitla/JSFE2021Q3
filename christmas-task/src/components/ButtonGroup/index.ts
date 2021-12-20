import BaseComponent from '../BaseComponent';
import Button from '../Button';

class ButtonGroup extends BaseComponent {
  parentNode: HTMLElement;

  buttons: Button[];

  constructor(parentNode: HTMLElement, items: string[], styles: string[] = []) {
    super('div', styles);

    this.parentNode = parentNode;
    this.buttons = items.map(
      (item) => new Button(this.element, item, ['button-primary'])
    );
  }

  render(): void {
    this.buttons.forEach((button) => button.render());

    this.parentNode.appendChild(this.element);
  }

  afterRender(callback: (target: HTMLElement) => void): void {
    this.element.onclick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button');
      if (target === null) return;

      target.classList.toggle('active');

      callback(target);
    };
  }
}

export default ButtonGroup;
