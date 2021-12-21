import BaseComponent from '../BaseComponent';
import FilterByInput from '../FilterByInput';
import { FilterType } from '../../types';

class FiltersByInputContainer extends BaseComponent {
  parentNode: HTMLElement;

  countFilter: FilterByInput;

  yearFilter: FilterByInput;

  constructor(parentNode: HTMLElement, counts: number[], years: number[]) {
    super('div', ['filters-by-input']);

    const countMin = Math.min(...counts);
    const countMax = Math.max(...counts);
    const yearMin = Math.min(...years);
    const yearMax = Math.max(...years);

    this.countFilter = new FilterByInput(this.element, 'count', [
      countMin,
      countMax,
      1,
    ]);

    this.yearFilter = new FilterByInput(this.element, 'year', [
      yearMin,
      yearMax,
      10,
    ]);

    this.parentNode = parentNode;
  }

  render(): void {
    this.countFilter.render('Amount of toys:');

    this.yearFilter.render('Purchase year:');

    this.parentNode.appendChild(this.element);
  }

  afterRender(applyFilter: (type: FilterType, filter: string[]) => void): void {
    this.countFilter.afterRender(applyFilter);
    this.yearFilter.afterRender(applyFilter);
  }
}

export default FiltersByInputContainer;
