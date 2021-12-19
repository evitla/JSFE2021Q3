import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';

import BaseComponent from '../BaseComponent';

import './style.scss';

class FilterByInput extends BaseComponent {
  parentNode: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super('div', ['count']);

    this.element.id = 'count-slider';
    this.parentNode = parentNode;

    noUiSlider.create(this.element, {
      start: [1, 12],
      connect: true,
      range: {
        min: 1,
        max: 12,
      },
      step: 1,
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

  afterRender(): void {
    (this.element as target).noUiSlider.on('update', (values) => {
      const minValue = values[0];
      const maxValue = values[1];
      console.log(minValue, maxValue);
    });
  }
}

export default FilterByInput;
