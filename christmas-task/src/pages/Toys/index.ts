import BasePage from '../BasePage';
import {
  FiltersByInputContainer,
  FiltersByValueContainer,
} from '../../components/Filters';
import ToyCards from '../../components/ToyCards';
import Select from '../../components/Select';
import { FilterType, IToyProps } from '../../types';
import { parseImages, sort } from '../../utils';

import './style.scss';

class Toys extends BasePage {
  controller = document.createElement('div');

  filtersByValueContainer: FiltersByValueContainer;

  filtersByInputContainer: FiltersByInputContainer;

  sortSelect = new Select(
    this.controller,
    [
      'Sort toys:',
      'Ascending order by name',
      'Descending order by name',
      'Ascending order by year',
      'Descending order by year',
    ],
    ['sort-select']
  );

  toyCards: ToyCards;

  searchInput: HTMLInputElement = document.querySelector('.search-input');

  constructor(items: IToyProps[]) {
    super(['toys-page']);

    this.controller.className = 'controller';

    const { shapes, colors, sizes, counts, years } = parseImages(items);

    this.filtersByValueContainer = new FiltersByValueContainer(
      this.controller,
      shapes,
      colors,
      sizes
    );
    this.filtersByInputContainer = new FiltersByInputContainer(
      this.controller,
      counts,
      years
    );
    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.element.appendChild(this.controller);
    this.filtersByValueContainer.render();
    this.filtersByInputContainer.render();

    this.sortSelect.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.filtersByValueContainer.afterRender(this.applyFilter);
    this.filtersByInputContainer.afterRender(this.applyFilter);

    this.searchInput.oninput = this.search;

    this.sortSelect.afterRender(this.sort);
  }

  private applyFilter = (
    type: FilterType,
    filters: (string | number | boolean)[]
  ) => {
    this.toyCards.cards.forEach((card) => {
      if (type === 'favorite') {
        if (!card.props.favorite) {
          card.element.classList.toggle(`hide-by-favorite`);
        }
        return;
      }

      card.element.classList.remove(`hide-by-${type}`);

      if (filters.length !== 0 && !filters.includes(card.props[type])) {
        card.element.classList.toggle(`hide-by-${type}`);
      }
    });
  };

  private sort = (target: HTMLElement) => {
    switch (target.innerText) {
      case 'Ascending order by name':
        this.toyCards.cards.sort((a, b) => sort(a.props.name, b.props.name));
        break;
      case 'Descending order by name':
        this.toyCards.cards.sort((a, b) => sort(b.props.name, a.props.name));
        break;
      case 'Ascending order by year':
        this.toyCards.cards.sort((a, b) => sort(a.props.year, b.props.year));
        break;
      case 'Descending order by year':
        this.toyCards.cards.sort((a, b) => sort(b.props.year, a.props.year));
        break;
      default:
        this.toyCards.cards.sort((a, b) => sort(a.props.num, b.props.num));
    }

    this.toyCards.cards.forEach((card, index) => {
      card.element.style.order = index.toString();
    });
  };

  private search = () => {
    const { value } = this.searchInput;

    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`hide-by-search`);

      if (!card.props.name.toLowerCase().includes(value.toLowerCase())) {
        card.element.classList.add(`hide-by-search`);
      }
    });
  };
}

export default Toys;
