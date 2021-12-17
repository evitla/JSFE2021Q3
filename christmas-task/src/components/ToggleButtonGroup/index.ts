import BaseComponent from '../BaseComponent';
import Button from '../Button';

class ToggleButtonGroup extends BaseComponent {
  parentNode: HTMLElement;

  buttons: Button[];

  constructor(parentNode: HTMLElement, items: string[], styles: string[] = []) {
    super('div', styles);

    this.parentNode = parentNode;
    this.buttons = items.map(
      (item) => new Button(this.element, item, ['primary-button'])
    );
  }

  render(): void {
    this.buttons.forEach((button) => button.render());

    this.parentNode.appendChild(this.element);
  }

  afterRender(eventListener: (target: HTMLElement) => void = () => {}): void {
    this.element.onclick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button');

      this.buttons.forEach((button) =>
        button.element.classList.remove('active')
      );

      target.classList.add('active');

      eventListener(target);
    };
  }
}

export default ToggleButtonGroup;
