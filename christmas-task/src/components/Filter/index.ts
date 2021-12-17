import BaseComponent from '../BaseComponent';
import ToggleButtonGroup from '../ToggleButtonGroup';

type FilterType = 'shape' | 'color' | 'size';

class Filter extends BaseComponent {
  parentNode: HTMLElement;

  type: FilterType;

  filterButtonGroup: ToggleButtonGroup;

  constructor(parentNode: HTMLElement, type: FilterType, filters: string[]) {
    super('div', [type]);

    this.parentNode = parentNode;
    this.type = type;

    this.filterButtonGroup = new ToggleButtonGroup(this.element, filters);
    this.filterButtonGroup.buttons.forEach((button, index) => {
      button.element.dataset.filter = filters[index];
    });
  }

  render(): void {
    this.filterButtonGroup.render();
    this.parentNode.appendChild(this.element);
  }

  afterRender(callback: (type: FilterType, filter: string) => void): void {
    const eventListener = (target: HTMLElement) => {
      const { filter } = target.dataset;

      callback(this.type, filter);
    };

    this.filterButtonGroup.afterRender(eventListener);
  }
}

export default Filter;
