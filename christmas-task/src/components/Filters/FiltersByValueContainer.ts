import { FilterType } from '../../types';
import BaseComponent from '../BaseComponent';
import { ball, bell, cone, snowflake, toy } from '../Icons';
import FilterByValue from './FilterByValue';

const shapeIcons: { [key: string]: string } = {
  ball,
  bell,
  cone,
  snowflake,
  toy,
};

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
      shapes.map((shape) => shapeIcons[shape]),
      shapes
    );

    this.colorFiltersContainer = new FilterByValue(
      this.element,
      'color',
      colors.map(
        (color) => `<div class="box" style="background-color: ${color}"></div>`
      ),
      colors
    );

    this.sizeFiltersContainer = new FilterByValue(
      this.element,
      'size',
      sizes.map(() => ball),
      sizes
    );

    this.favoriteFilterContainer = new FilterByValue(
      this.element,
      'favorite',
      [`<div class="box"></div>`],
      ['favorite']
    );

    this.parentNode = parentNode;
  }

  render(): void {
    this.shapeFiltersContainer.render('Shape:');
    this.colorFiltersContainer.render('Color:');
    this.sizeFiltersContainer.render('Size:');
    this.favoriteFilterContainer.render('Favorite:');

    this.parentNode.appendChild(this.element);
  }

  afterRender(
    applyFilter: (type: FilterType, filters: string[]) => void
  ): void {
    this.shapeFiltersContainer.afterRender(applyFilter);
    this.colorFiltersContainer.afterRender(applyFilter);
    this.sizeFiltersContainer.afterRender(applyFilter);
    this.favoriteFilterContainer.afterRender(applyFilter);
  }
}

export default FiltersByValueContainer;
