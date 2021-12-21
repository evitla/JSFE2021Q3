import BaseComponent from '../BaseComponent';
import ButtonGroup from '../ButtonGroup';
import { FilterType } from '../../types';

class FilterByValue extends BaseComponent {
  parentNode: HTMLElement;

  type: FilterType;

  filterButtonGroup: ButtonGroup;

  title = new BaseComponent('h3', ['filter-title']);

  constructor(
    parentNode: HTMLElement,
    type: FilterType,
    contents: string[],
    filters: string[]
  ) {
    super('div', [type]);

    this.parentNode = parentNode;
    this.type = type;

    this.filterButtonGroup = new ButtonGroup(this.element, contents);
    this.filterButtonGroup.buttons.forEach((button, index) => {
      button.element.dataset.filter = filters[index];
    });
  }

  render(title: string): void {
    this.title.element.innerText = title;
    this.filterButtonGroup.render();
    this.parentNode.append(this.title.element, this.element);
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
