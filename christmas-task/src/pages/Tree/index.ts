import BasePage from '../BasePage';
import BaseComponent from '../../components/BaseComponent';
import ToyCard from '../../components/ToyCards/toyCard';

import './style.scss';

const MAX_TOYS = 20;

class Tree extends BasePage {
  favoriteCards: ToyCard[];

  toys = new BaseComponent('div', ['toys']);

  async render(toyCards: ToyCard[]): Promise<void> {
    const cards = toyCards.slice(0, MAX_TOYS);

    cards.forEach((card) => card.render(true));

    const favoriteCards = toyCards.filter(
      (card) => card.props.personalFavorite
    );
    this.toys.element.append(
      ...(favoriteCards.length !== 0 ? favoriteCards : cards).map(
        (c) => c.element
      )
    );

    this.element.appendChild(this.toys.element);
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Tree;
