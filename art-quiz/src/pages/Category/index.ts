import BaseComponent from '../../components/BaseComponent';
import { ICategoryProps, IImageProps } from '../../models';
import { categoryItemsProps } from '../../store';
import {
  delay,
  getImageURL,
  getRandomNumber,
  getUniqueRandomNumbers,
  parseRequestURL,
  setLocalStorage,
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

const getCategoryProps = (id: number) =>
  categoryItemsProps.find((item) => item.imageNumber === id);

class Category extends BasePage {
  hasHeader = true;

  private optionsContainer = new BaseComponent('div', ['options-container']);

  private imageContainer = new BaseComponent('figure', ['img-container']);

  private categoryImages: IImageProps[];

  private currentImage: number;

  private id: number;

  private props: ICategoryProps;

  score: number;

  constructor(private images: IImageProps[]) {
    super(['category']);
  }

  async render(): Promise<void> {
    const request = parseRequestURL();
    this.id = +request.id * 10;
    this.currentImage = 0;
    this.score = 0;

    this.props = getCategoryProps(this.id);
    this.categoryImages = getCategory(this.images, this.id);

    this.imageContainer.element.style.backgroundImage = `
      url(${getImageURL(this.categoryImages[this.currentImage].imageNum)})
    `;

    this.renderAnswerOptions();

    this.element.innerHTML = `
      <h3 class="category-title">${this.props.title}</h3>
      <p class="question-title">Кто является автором данной картины?</p>
    `;
    this.element.append(
      this.imageContainer.element,
      this.optionsContainer.element
    );
  }

  async afterRender(): Promise<void> {
    this.optionsContainer.element.onclick = this.handleClick;
  }

  private getAuthors = () => [
    ...new Set(this.images.map((image) => image.author)),
  ];

  private renderAnswerOptions = () => {
    const authors = this.getAuthors();

    const fourRandomAuthors = getUniqueRandomNumbers(4, 0, authors.length);

    if (!fourRandomAuthors.includes(this.currentImage)) {
      fourRandomAuthors[getRandomNumber(0, 4)] =
        this.categoryImages[this.currentImage].imageNum;
    }

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
      setLocalStorage(`score-${this.props.title}`, this.score.toString());
      const link = document.createElement('a');
      link.href = `/#/categories`;
      link.click();
    }
  };
}

export default Category;
