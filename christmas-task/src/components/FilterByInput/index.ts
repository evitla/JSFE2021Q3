import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';

import BaseComponent from '../BaseComponent';
import { FilterType } from '../../types';

import './style.scss';

class FilterByInput extends BaseComponent {
  parentNode: HTMLElement;

  type: FilterType;

  constructor(parentNode: HTMLElement, type: FilterType, range: number[]) {
    super('div', [type]);

    this.element.id = `${type}-slider`;
    this.parentNode = parentNode;

    this.type = type;

    const [min, max, step] = range;

    noUiSlider.create(this.element, {
      start: [min, max],
      connect: true,
      range: {
        min,
        max,
      },
      step,
      tooltips: [true, true],
      format: {
        from: (value) => +value,
        to: (value) => Math.floor(value),
      },
    });
  }

  render(): void {
    this.parentNode.appendChild(this.element);
  }

  afterRender(
    applyFilter: (type: FilterType, filters: (string | number)[]) => void
  ): void {
    (this.element as target).noUiSlider.on('update', (values) => {
      const minValue = values[0];
      const maxValue = values[1];
      const filters = [...Array(+maxValue - +minValue + 1).keys()].map((n) =>
        (n + +minValue).toString()
      );

      applyFilter(this.type, filters);
    });
  }
}

export default FilterByInput;
