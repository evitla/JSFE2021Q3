import BasePage from '../BasePage';
import ToyCard from '../../components/ToyCards/toyCard';

import './style.scss';

const MAX_TOYS = 20;

class Tree extends BasePage {
  favoriteCards: ToyCard[];

  async render(toyCards: ToyCard[]): Promise<void> {
    toyCards.forEach((card) => card.render());

    const favoriteCards = toyCards.filter(
      (card) => card.props.personalFavorite
    );
    this.element.append(
      ...(favoriteCards.length !== 0
        ? favoriteCards
        : toyCards.slice(MAX_TOYS)
      ).map((c) => c.element)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Tree;
