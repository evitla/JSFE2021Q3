import BaseComponent from '../../components/BaseComponent';
import { IImageProps } from '../../models';
import {
  delay,
  getImageURL,
  getRandomNumber,
  getRandomNumbers,
  parseRequestURL,
} from '../../utils';
import BasePage from '../BasePage';

import './style.scss';

const getImageInfo = (images: IImageProps[]) => (id: number) => {
  const imageIndex = images.findIndex((image) => image.imageNum === id);

  return imageIndex !== -1 ? images[imageIndex] : null;
};

const getCategory = (images: IImageProps[], id: number) => {
  const categoryImages = [];

  const getImageInfoById = getImageInfo(images);

  for (let i = id; i < id + 10; i++) {
    categoryImages.push(getImageInfoById(i));
  }

  return categoryImages;
};

class Category extends BasePage {
  private optionsContainer = new BaseComponent('div', ['options-container']);

  private imageContainer = new BaseComponent('figure', ['img-container']);

  private categoryImages: IImageProps[];

  private currentImage: number;

  score: number;

  constructor(private images: IImageProps[]) {
    super(['category']);
  }

  async render(): Promise<void> {
    const request = parseRequestURL();
    this.currentImage = 0;
    this.score = 0;

    this.categoryImages = getCategory(this.images, +request.id * 10);

    this.imageContainer.element.style.backgroundImage = `
      url(${getImageURL(this.categoryImages[this.currentImage].imageNum)})
    `;

    this.renderAnswerOptions();

    this.element.append(
      this.imageContainer.element,
      this.optionsContainer.element
    );
  }

  async afterRender(): Promise<void> {
    this.optionsContainer.element.onclick = this.handleClick;
  }

  private getAuthors = () => {
    return [...new Set(this.images.map((image) => image.author))];
  };

  private renderAnswerOptions = () => {
    const authors = this.getAuthors();

    const fourRandomAuthors = getRandomNumbers(4, 0, authors.length);
    fourRandomAuthors[getRandomNumber(0, 4)] =
      this.categoryImages[this.currentImage].imageNum;

    this.optionsContainer.element.innerHTML = fourRandomAuthors
      .map((randomAuthor) => {
        return `<button class="button button-small button-primary">${this.images[randomAuthor].author}</button>`;
      })
      .join('\n');
  };

  private handleClick = async (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('button')) return;

    const options = this.optionsContainer.element.querySelectorAll('button');

    options.forEach((option) => {
      if (option.innerText === this.categoryImages[this.currentImage].author) {
        option.className = 'button button-small button-success';
      }
    });

    if (target.innerText === this.categoryImages[this.currentImage].author) {
      this.score++;
    } else {
      target.className = 'button button-small button-danger';
    }

    this.currentImage++;

    await delay(750);

    if (this.currentImage < 10) {
      this.imageContainer.element.style.backgroundImage = `
        url(${getImageURL(this.categoryImages[this.currentImage].imageNum)})
      `;
      this.renderAnswerOptions();
    } else {
      console.log('Your score is:', this.score);
    }
  };
}

export default Category;
