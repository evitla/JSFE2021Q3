import BaseComponent from '../BaseComponent';
import ToggleButtonGroup from '../ToggleButtonGroup';
import { FilterType } from '../../types';

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

  afterRender(
    applyFilter: (type: FilterType, filter: string) => void,
    restoreFilters: (type: FilterType) => void
  ): void {
    const callback = (target: HTMLElement) => {
      const { filter } = target.dataset;
      applyFilter(this.type, filter);
    };

    const restore = () => restoreFilters(this.type);

    this.filterButtonGroup.afterRender(callback, restore);
  }
}

export default Filter;
