import BaseComponent from '../BaseComponent';
import { IToyProps } from '../../types';

import './style.scss';

class ToyCard extends BaseComponent {
  parentNode: HTMLElement;

  props: IToyProps;

  constructor(parentNode: HTMLElement, props: IToyProps) {
    super('div', ['toy-card']);

    this.element.style.order = props.num.toString();

    this.parentNode = parentNode;
    this.props = { ...props, personalFavorite: false };
  }

  render(forTreePage = false): void {
    if (forTreePage) {
      this.element.innerHTML = `
        <img
          class="toy-image"
          src=${this.props.image}
          alt="toy"
          draggable="true"
        >
        <span class="toy-amount">${this.props.count}</span>
      `;
      return;
    }

    this.element.innerHTML = `
      <h3 class="card-title">${this.props.name}</h3>
      <div class="card-content">
        <img class="toy-image" src=${this.props.image} alt="toy">
        <ul class="toy-info">
          <li>Amount: ${this.props.count}</li>
          <li>Purchase year: ${this.props.year}</li>
          <li>Shape: ${this.props.shape}</li>
          <li>Color: ${this.props.color}</li>
          <li>Size: ${this.props.size}</li>
          <li>Favorite: ${this.props.favorite ? 'Yes' : 'No'}</li>
        </ul>
      </div>
    `;

    this.parentNode.appendChild(this.element);
  }

  afterRender(): void {
    this.element.onclick = () => {
      this.props.personalFavorite = !this.props.personalFavorite;
      this.element.classList.toggle('favorite-toy');
    };
  }
}

export default ToyCard;
