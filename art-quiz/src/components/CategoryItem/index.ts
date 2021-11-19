import BaseComponent from '../BaseComponent';
import { getImageURL } from '../../utils';

import './style.scss';
import { ICategoryProps } from '../../models';

class CategoryItem extends BaseComponent {
  private link = document.createElement('a');

  constructor(readonly props: ICategoryProps) {
    super('figure', ['category']);
    this.link.href = `/#/categories/${props.imageNumber / 10}`;
  }

  async render(): Promise<void> {
    this.element.append(this.link);
    this.renderTitle();
    const imageURL = getImageURL(this.props.imageNumber);
    this.renderImage(imageURL);
  }

  private renderTitle() {
    this.link.innerHTML = `
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

    this.link.append(img);
  }
}

export default CategoryItem;
