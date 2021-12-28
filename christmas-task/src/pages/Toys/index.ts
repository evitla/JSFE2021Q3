import BasePage from '../BasePage';
import {
  FiltersByInputContainer,
  FiltersByValueContainer,
} from '../../components/Filters';
import Button from '../../components/Button';
import ToyCards from '../../components/ToyCards';
import SearchBar from '../../components/SearchBar';
import Select from '../../components/Select';
import { FilterType, IToyProps, PageClassNameType } from '../../types';
import { parseImages, sort } from '../../utils';

import './style.scss';

class Toys extends BasePage {
  controller = document.createElement('div');

  filtersByValueContainer: FiltersByValueContainer;

  filtersByInputContainer: FiltersByInputContainer;

  rightSide = document.createElement('div');

  sortSelect = new Select(
    this.rightSide,
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

  searchBar = new SearchBar(this.rightSide);

  restoreButton = new Button(this.controller, 'Restore Settings', [
    'button-primary',
    'restore-button',
  ]);

  constructor(name: PageClassNameType, items: IToyProps[]) {
    super(name);

    this.controller.className = 'controller';
    this.rightSide.className = 'controller-right-side';

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
    this.controller.appendChild(this.rightSide);

    this.searchBar.render();
    this.sortSelect.render();

    this.restoreButton.render();

    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.toyCards.afterRender();

    this.filtersByValueContainer.afterRender(this.applyFilter);
    this.filtersByInputContainer.afterRender(this.applyFilter);

    this.searchBar.input.oninput = this.search;

    this.sortSelect.afterRender(this.sort);

    this.restoreButton.element.onclick = this.restoreFilters;
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

  private sort = (target: HTMLSelectElement) => {
    switch (target.value) {
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

  private restoreFilters = () => {
    this.searchBar.input.value = '';

    this.filtersByInputContainer.countFilter.element.noUiSlider.set([
      this.filtersByInputContainer.countFilter.min,
      this.filtersByInputContainer.countFilter.max,
    ]);

    this.filtersByInputContainer.yearFilter.element.noUiSlider.set([
      this.filtersByInputContainer.yearFilter.min,
      this.filtersByInputContainer.yearFilter.max,
    ]);

    this.filtersByValueContainer.shapeFiltersContainer.filterButtonGroup.buttons.forEach(
      (b) => b.element.classList.remove('active')
    );

    this.filtersByValueContainer.colorFiltersContainer.filterButtonGroup.buttons.forEach(
      (b) => b.element.classList.remove('active')
    );

    this.filtersByValueContainer.sizeFiltersContainer.filterButtonGroup.buttons.forEach(
      (b) => b.element.classList.remove('active')
    );

    this.filtersByValueContainer.favoriteFilterContainer.filterButtonGroup.buttons.forEach(
      (b) => b.element.classList.remove('active')
    );

    this.toyCards.cards.forEach((card) =>
      card.element.classList.remove(
        ...[
          'hide-by-shape',
          'hide-by-color',
          'hide-by-size',
          'hide-by-favorite',
          'hide-by-search',
          'hide-by-count',
          'hide-by-year',
        ]
      )
    );
  };

  private search = () => {
    const { value } = this.searchBar.input;

    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`hide-by-search`);

      if (!card.props.name.toLowerCase().includes(value.toLowerCase())) {
        card.element.classList.add(`hide-by-search`);
      }
    });
  };
}

export default Toys;
