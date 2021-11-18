import BaseComponent from '../BaseComponent';
import { getImageURL } from '../../utils';

import './style.scss';
import { ICategoryProps } from '../../models';

class Category extends BaseComponent {
  constructor(readonly props: ICategoryProps) {
    super('figure', ['category']);
  }

  async render(): Promise<void> {
    this.renderTitle();
    const imageURL = getImageURL(this.props.imageNumber);
    this.renderImage(imageURL);
  }

  private renderTitle() {
    this.element.innerHTML = `
      <figcaption>
        <h3>${this.props.title}</h3>
        ${this.props.score ? `<span>${this.props.score}/10</span>` : ''}
      </figcaption>
    `;
  }

  private renderImage(imageURL: string) {
    const img = new Image();
    img.src = imageURL;
    img.alt = 'Category image';
    if (this.props.score) {
      img.style.filter = 'none';
    }

    this.element.append(img);
  }
}

export default Category;
