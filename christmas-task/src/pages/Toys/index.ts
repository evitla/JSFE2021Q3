import BasePage from '../BasePage';
import BaseComponent from '../../components/BaseComponent';
import Button from '../../components/Button';
import Filter from '../../components/Filter';
import ToyCards from '../../components/ToyCards';
import { FilterType, IToyProps } from '../../types';

import './style.scss';

class Toys extends BasePage {
  filtersContainer = new BaseComponent('div', ['filters']);

  shapeFiltersContainer = new Filter(this.filtersContainer.element, 'shape', [
    'ball',
    'bell',
  ]);

  colorFiltersContainer = new Filter(this.filtersContainer.element, 'color', [
    'red',
    'green',
  ]);

  sortButton = new Button(this.element, 'Sort', ['button-primary']);

  toyCards: ToyCards;

  constructor(items: IToyProps[]) {
    super(['toys-page']);

    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.shapeFiltersContainer.render();
    this.colorFiltersContainer.render();

    this.element.appendChild(this.filtersContainer.element);

    this.sortButton.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.shapeFiltersContainer.afterRender(
      this.applyFilter,
      this.restoreFilters
    );
    this.colorFiltersContainer.afterRender(
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
