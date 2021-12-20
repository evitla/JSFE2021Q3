import BasePage from '../BasePage';
import Button from '../../components/Button';
import FiltersByValueContainer from '../../components/FiltersByValueContainer';
import FilterByInput from '../../components/FilterByInput';
import ToyCards from '../../components/ToyCards';
import { FilterType, IToyProps } from '../../types';
import { parseImages } from '../../utils';

import './style.scss';

class Toys extends BasePage {
  filtersByValueContainer: FiltersByValueContainer;

  filterByInput: FilterByInput;

  sortButton = new Button(this.element, 'Sort', ['button-primary']);

  toyCards: ToyCards;

  constructor(items: IToyProps[]) {
    super(['toys-page']);

    const { shapes, colors, sizes } = parseImages(items);

    this.filtersByValueContainer = new FiltersByValueContainer(
      this.element,
      shapes,
      colors,
      sizes
    );
    this.filterByInput = new FilterByInput(this.element);
    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.filtersByValueContainer.render();
    this.filterByInput.render();

    this.sortButton.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.filtersByValueContainer.afterRender(
      this.applyFilter,
      this.restoreFilters
    );
    this.filterByInput.afterRender();

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

  private applyFilter = (type: FilterType, filter: string) => {
    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`hide-by-${type}`);

      if (card.props[type] !== filter) {
        card.element.classList.toggle(`hide-by-${type}`);
      }
    });
  };
}

export default Toys;
