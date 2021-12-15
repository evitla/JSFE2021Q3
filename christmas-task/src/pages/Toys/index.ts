import BasePage from '../BasePage';
import Button from '../../components/Button';
import ToyCards from '../../components/ToyCards';
import { IToyProps } from '../../types';

import './style.scss';

class Toys extends BasePage {
  filterButton = new Button(this.element, 'Filter', ['button-primary']);

  sortButton = new Button(this.element, 'Sort', ['button-primary']);

  toyCards: ToyCards;

  constructor(items: IToyProps[]) {
    super(['toys-page']);

    this.toyCards = new ToyCards(this.element, items);
  }

  async render(): Promise<void> {
    this.filterButton.render();
    this.sortButton.render();
    this.toyCards.render();
  }

  async afterRender(): Promise<void> {
    this.filterButton.element.onclick = () => {
      this.toyCards.cards.forEach((card) => {
        if (card.props.year > 1980) {
          card.element.style.display = 'none';
        }
      });
    };

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
}

export default Toys;
