import { FilterType } from '../../types';
import BaseComponent from '../BaseComponent';
import FilterByValue from '../FilterByValue';

class FiltersByValueContainer extends BaseComponent {
  parentNode: HTMLElement;

  shapeFiltersContainer: FilterByValue;

  colorFiltersContainer: FilterByValue;

  sizeFiltersContainer: FilterByValue;

  favoriteFilterContainer: FilterByValue;

  constructor(
    parentNode: HTMLElement,
    shapes: string[],
    colors: string[],
    sizes: string[]
  ) {
    super('div', ['filters-by-value']);

    this.shapeFiltersContainer = new FilterByValue(
      this.element,
      'shape',
      shapes
    );

    this.colorFiltersContainer = new FilterByValue(
      this.element,
      'color',
      colors
    );

    this.sizeFiltersContainer = new FilterByValue(this.element, 'size', sizes);

    this.favoriteFilterContainer = new FilterByValue(this.element, 'favorite', [
      'favorite',
    ]);

    this.parentNode = parentNode;
  }

  render(): void {
    this.shapeFiltersContainer.render();
    this.colorFiltersContainer.render();
    this.sizeFiltersContainer.render();
    this.favoriteFilterContainer.render();

    this.parentNode.appendChild(this.element);
  }

  afterRender(
    applyFilter: (type: FilterType, filters: string[]) => void,
    restoreFilters: (type: FilterType) => void
  ): void {
    this.shapeFiltersContainer.afterRender(applyFilter, restoreFilters);
    this.colorFiltersContainer.afterRender(applyFilter, restoreFilters);
    this.sizeFiltersContainer.afterRender(applyFilter, restoreFilters);
    this.favoriteFilterContainer.afterRender(applyFilter, restoreFilters);
  }
}

export default FiltersByValueContainer;
