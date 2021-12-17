import BasePage from '../BasePage';
import Button from '../../components/Button';
import FiltersByValueContainer from '../../components/FiltersByValueContainer';
import ToyCards from '../../components/ToyCards';
import { FilterType, IToyProps } from '../../types';
import { parseImages } from '../../utils';

import './style.scss';

class Toys extends BasePage {
  filtersByValueContainer: FiltersByValueContainer;

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
    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.filtersByValueContainer.render();

    this.sortButton.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.filtersByValueContainer.afterRender(
      this.applyFilter,
      this.restoreFilters
    );

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
      card.element.classList.remove(`visibility-hidden-${type}`);
    });
  };

  private applyFilter = (type: FilterType, filter: string) => {
    this.toyCards.cards.forEach((card) => {
      card.element.classList.remove(`visibility-hidden-${type}`);

      if (card.props[type] !== filter) {
        card.element.classList.toggle(`visibility-hidden-${type}`);
      }
    });
  };
}

export default Toys;
