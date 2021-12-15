import BaseComponent from '../BaseComponent';
import ToyCard from './toyCard';
import { getImageURL } from '../../utils';
import { IToyProps } from '../../types';

import './style.scss';

class ToyCards extends BaseComponent {
  parentNode: HTMLElement;

  cards: ToyCard[];

  constructor(parentNode: HTMLElement, items: IToyProps[]) {
    super('div', ['toy-cards']);

    this.parentNode = parentNode;

    this.cards = items.map((item) => {
      const props = {
        image: getImageURL('toys', item.num),
        ...item,
      };

      return new ToyCard(this.element, props);
    });
  }

  render(): void {
    this.cards.forEach((card) => card.render());

    this.parentNode.appendChild(this.element);
  }
}

export default ToyCards;
