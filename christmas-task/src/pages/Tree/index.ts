import BaseComponent from '../../components/BaseComponent';
import BasePage from '../BasePage';
import ToyCard from '../../components/ToyCards/toyCard';
import { PageClassNameType } from '../../types';

import './style.scss';

class Tree extends BasePage {
  favoriteCards: ToyCard[];

  constructor(name: PageClassNameType) {
    super(name);
  }

  async render(toyCards: ToyCard[]): Promise<void> {
    const favoriteCards = toyCards.filter(
      (card) => card.props.personalFavorite
    );
    this.element.append(...favoriteCards.map((c) => c.element));
  }

  // eslint-disable-next-line class-methods-use-this
  async afterRender(): Promise<void> {
    //
  }
}

export default Tree;
