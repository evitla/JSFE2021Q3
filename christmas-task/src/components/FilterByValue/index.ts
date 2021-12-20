import BaseComponent from '../BaseComponent';
import ButtonGroup from '../ButtonGroup';
import { FilterType } from '../../types';

class FilterByValue extends BaseComponent {
  parentNode: HTMLElement;

  type: FilterType;

  filterButtonGroup: ButtonGroup;

  constructor(parentNode: HTMLElement, type: FilterType, filters: string[]) {
    super('div', [type]);

    this.parentNode = parentNode;
    this.type = type;

    this.filterButtonGroup = new ButtonGroup(this.element, filters);
    this.filterButtonGroup.buttons.forEach((button, index) => {
      button.element.dataset.filter = filters[index];
    });
  }

  render(): void {
    this.filterButtonGroup.render();
    this.parentNode.appendChild(this.element);
  }

  afterRender(
    applyFilter: (type: FilterType, filters: string[]) => void
  ): void {
    const callback = () => {
      const filters = this.filterButtonGroup.buttons
        .filter((button) => button.element.classList.contains('active'))
        .map((activeButton) => activeButton.element.dataset.filter);

      applyFilter(this.type, filters);
    };

    this.filterButtonGroup.afterRender(callback);
  }
}

export default FilterByValue;
