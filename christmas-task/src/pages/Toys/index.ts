import BasePage from '../BasePage';
import Button from '../../components/Button';
import FiltersByValueContainer from '../../components/FiltersByValueContainer';
import FiltersByInputContainer from '../../components/FiltersByInputContainer';
import ToyCards from '../../components/ToyCards';
import { FilterType, IToyProps } from '../../types';
import { parseImages } from '../../utils';

import './style.scss';

class Toys extends BasePage {
  filtersByValueContainer: FiltersByValueContainer;

  filtersByInputContainer: FiltersByInputContainer;

  sortButton = new Button(this.element, 'Sort', ['button-primary']);

  toyCards: ToyCards;

  constructor(items: IToyProps[]) {
    super(['toys-page']);

    const { shapes, colors, sizes, counts, years } = parseImages(items);

    this.filtersByValueContainer = new FiltersByValueContainer(
      this.element,
      shapes,
      colors,
      sizes
    );
    this.filtersByInputContainer = new FiltersByInputContainer(
      this.element,
      counts,
      years
    );
    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.filtersByValueContainer.render();
    this.filtersByInputContainer.render();

    this.sortButton.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.filtersByValueContainer.afterRender(
      this.applyFilter,
      this.restoreFilters
    );
    this.filtersByInputContainer.afterRender(this.applyFilter);

    this.sortButton.element.onclick = () => {
      this.toyCards.cards.sort((a, b) => {
        if (a.props.name > b.props.name) return 1;
        if (a.props.name < b.props.name) return -1;
        return 0;
      });

      this.toyCards.cards.forEach((card, index) => {
        card.element.style.order = index.toString();
      });
    };
  }

  private restoreFilters = (type: FilterType) => {
    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`hide-by-${type}`);
    });
  };

  private applyFilter = (type: FilterType, filters: (string | number)[]) => {
    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`hide-by-${type}`);

      if (!filters.includes(card.props[type])) {
        card.element.classList.toggle(`hide-by-${type}`);
      }
    });
  };
}

export default Toys;
